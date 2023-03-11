const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  surplusFoodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
  retailer: { type: mongoose.Schema.Types.ObjectId, ref: 'Retailer', required: true },
  charity: { type: mongoose.Schema.Types.ObjectId, ref: 'Charity', required: true },
  recipient: { type: String, required: true },
  status: { type: String, required: true },
  notificationStatus: { type: Boolean, required: true }
});

module.exports = mongoose.model('Inventory', inventorySchema);