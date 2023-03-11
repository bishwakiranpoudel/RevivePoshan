const express = require('express');
const { authenticate } = require('../middleware/authenticate');
const router = express.Router();
const Retailer = require('../models/retailer');

// Get all food retailers
router.get('/', authenticate,async (req, res) => {
  try {
    const retailers = await Retailer.find();
    res.json(retailers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a specific food retailer
router.get('/:id',authenticate, getRetailer, (req, res) => {
  res.json(res.retailer);
});

// Create a new food retailer
router.post('/', async (req, res) => {
  const retailer = new Retailer({
    name: req.body.name,
    contactPerson: req.body.contactPerson,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    cuisine: req.body.cuisine,
    avgFoodWaste: req.body.avgFoodWaste,
    schedule: req.body.schedule,

    // add other fields as needed
  });

  try {
    const newRetailer = await retailer.save();
    res.status(201).json(newRetailer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a specific food retailer
router.patch('/:id',authenticate, getRetailer, async (req, res) => {
  if (req.body.name != null) {
    res.retailer.name = req.body.name;
  }
  if (req.body.contactPerson != null) {
    res.retailer.contactPerson = req.body.contactPerson;
  }
  if (req.body.phone != null) {
    res.retailer.phone = req.body.phone;
  }
  if (req.body.email != null) {
    res.retailer.email = req.body.email;
  }
  if (req.body.address != null) {
    res.retailer.address = req.body.address;
  }
  if (req.body.latitude != null) {
    res.retailer.latitude = req.body.latitude;
  }
  if (req.body.longitude != null) {
    res.retailer.longitude = req.body.longitude;
  }
  if (req.body.cuisine != null) {
    res.retailer.cuisine = req.body.cuisine;
  }
  if (req.body.avdFoodWaste != null) {
    res.retailer.avdFoodWaste = req.body.avdFoodWaste;
  }
  if (req.body.schedule != null) {
    res.retailer.schedule = req.body.schedule;
  }


  // update other fields as needed

  try {
    const updatedRetailer = await res.retailer.save();
    res.json(updatedRetailer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a specific food retailer
router.delete('/:id',authenticate, getRetailer, async (req, res) => {
  try {
    await res.retailer.rmrf();
    res.json({ message: 'Deleted retailer' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a specific retailer by ID
async function getRetailer(req, res, next) {
  try {
    const retailer = await Retailer.findById(req.params.id);
    if (retailer == null) {
      return res.status(404).json({ message: 'Cannot find retailer' });
    }
    res.retailer = retailer;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
