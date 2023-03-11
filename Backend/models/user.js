const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, enum: ['Retailer', 'Charity'], required: true },
  typeid: { type: Schema.Types.ObjectId, required: true, refPath: 'type' }
});

// Verify password
userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
  };

module.exports = mongoose.model('User', userSchema);