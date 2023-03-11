const mongoose = require('mongoose');

const retailerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },   
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  cuisine: { type: String, required: true },
  avgFoodWaste: { type: Number, required: true },
  schedule: { type: String, required: true },
});

retailerSchema.methods.rmrf = async function () {
    return mongoose.model('Retailer').deleteOne({_id: this._id}).exec();
  }

module.exports = mongoose.model('Retailer', retailerSchema);