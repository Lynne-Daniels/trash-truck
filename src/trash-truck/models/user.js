const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  country: String,
  city: String,
});

module.exports = mongoose.model("User", userSchema);
