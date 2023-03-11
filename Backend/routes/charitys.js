const express = require('express');
const { authenticate } = require('../middleware/authenticate');
const router = express.Router();
const Charity = require('../models/charity');

// Get all food charities
router.get('/',authenticate, async (req, res) => {
  try {
    const charities = await Charity.find();
    res.json(charities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a specific charity
router.get('/:id', authenticate, getCharity, (req, res) => {
  res.json(res.charity);
});

// Create a new charity
router.post('/', async (req, res) => {
  const charity = new Charity({
    name: req.body.name,
    contactPerson: req.body.contactPerson,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    schedule: req.body.schedule,

    // add other fields as needed
  });

  try {
    const newCharity = await charity.save();
    res.status(201).json(newCharity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a specific charity
router.patch('/:id', authenticate,getCharity, async (req, res) => {
  if (req.body.name != null) {
    res.charity.name = req.body.name;
  }
  if (req.body.contactPerson != null) {
    res.charity.contactPerson = req.body.contactPerson;
  }
  if (req.body.phone != null) {
    res.charity.phone = req.body.phone;
  }
  if (req.body.email != null) {
    res.charity.email = req.body.email;
  }
  if (req.body.address != null) {
    res.charity.address = req.body.address;
  }
  if (req.body.latitude != null) {
    res.charity.latitude = req.body.latitude;
  }
  if (req.body.longitude != null) {
    res.charity.longitude = req.body.longitude;
  }
  if (req.body.schedule != null) {
    res.charity.schedule = req.body.schedule;
  }


  // update other fields as needed

  try {
    const updatedCharity = await res.charity.save();
    res.json(updatedCharity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a specific food retailer
router.delete('/:id', authenticate, getCharity, async (req, res) => {
  try {
    await res.charity.rmrf();
    res.json({ message: 'Deleted charity' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific charity by ID
async function getCharity(req, res, next) {
  try {
    const charity = await Charity.findById(req.params.id);
    if (charity == null) {
      return res.status(404).json({ message: 'Cannot find retailer' });
    }
    res.charity = charity;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
