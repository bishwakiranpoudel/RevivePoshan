const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  sourceRetailer: { type: mongoose.Schema.Types.ObjectId, ref: 'Retailer', required: true },
  timeOfAvailability: { type: Date, required: true }
});


module.exports = mongoose.model('FoodItem', foodItemSchema);

