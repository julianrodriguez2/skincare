const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  skinType: String,
  concerns: [String],
  budget: String,
  hasOnboarded: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
