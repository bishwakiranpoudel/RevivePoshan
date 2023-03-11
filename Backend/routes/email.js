const nodemailer = require('nodemailer');
const express = require('express');
const verificationtoken = require('../models/verificationtoken');
const router = express.Router()

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bishwakiran725@gmail.com', // replace with your email address
        pass: 'tgvlvaeukcbrksdq' // replace with your email password
    }
});

router.post('/send-verification-email', async(req, res) => {
    // generate a random verification code
    let verificationCode = Math.floor(100000 + Math.random() * 900000);

    // setup email data with verification code
    let mailOptions = {
        from: 'reviveposhan', // replace with your email address
        to: req.body.email, // recipient email address from request body
        subject: 'Email Verification',
        text: `Your verification code is: ${verificationCode}`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error sending verification email' , error:error});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ message: 'Verification email sent successfully' });
        }
    });

    const VerificationToken = new verificationtoken({
       token:verificationCode
      });

      try {
        const newToken = await VerificationToken.save();
        res.status(201).send({tokenid:newToken.id});
      } catch (err) {
        res.status(400).json({ message: err.message });
      }

});

// API endpoint for verifying email with code
router.post('/verify-email', async(req, res) => {
    
    
    let code = req.body.code; // verification code from request body
    const token = await verificationtoken.findById(req.body.tokenid);
    console.log(token);
    
    // compare code with the actual verification code (e.g. stored in database)
    if (code === token.token) { 
        token.rmrf();// replace with actual verification code
        res.status(200).send({ message: 'Email verified successfully' });
        
    } else {
        res.status(400).send({ message: 'Invalid verification code' });
    }
});

module.exports = router;