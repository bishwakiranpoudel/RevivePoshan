const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next)=>{  
    bcrypt.hash(req.body.password ,10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User ({
            email: req.body.email,
            password: hashedPass,
            type: req.body.type,
            typeid: req.body.typeid
        })
        user.save()
        .then(user => {
            res.json({
                message:"Added Sucessfully",
                uId: user.id
            })
        })
        .catch(error=>{
            res.json({
                message: "An error occured!",
                error: error
            })
        })
    })   
};

const login =async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({ email });
    const token = jwt.sign({ email }, 'd5c673b4939e7fa55965f276cf9b4088c9607a1a57f78ed183ca3f907e89dff7', { expiresIn: '48h' });

    if (user && await user.isValidPassword(password)) {
      res.status(200).json({ success: true, userId: user.id ,token:token });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

}



module.exports = {
    register, login
}