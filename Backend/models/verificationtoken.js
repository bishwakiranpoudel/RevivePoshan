const mongoose = require('mongoose');

const verificationTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },

});

verificationTokenSchema.methods.rmrf = async function () {
    return mongoose.model('VerificationToken').deleteOne({_id: this._id}).exec();
  }

module.exports = mongoose.model('VerificationToken', verificationTokenSchema);