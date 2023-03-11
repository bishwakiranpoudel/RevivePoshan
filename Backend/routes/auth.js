const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/AuthController")
const User = require('../models/user');


router.post('/register', AuthController.register)
router.post('/login', AuthController.login)


router.get('/',async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  // Get a specific charity
  router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
  });



  // Middleware function to get a specific charity by ID
async function getUser(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find retailer' });
      }
      res.user = user;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

module.exports = router