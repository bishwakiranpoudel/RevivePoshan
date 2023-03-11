const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  schedule: { type: String, required: true },
});

charitySchema.methods.rmrf = async function () {
    return mongoose.model('Charity').deleteOne({_id: this._id}).exec();
  }
module.exports = mongoose.model('Charity', charitySchema);