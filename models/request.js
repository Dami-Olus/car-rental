const mongoose = require("mongoose");

// Create your User Model

const requestSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    date: Date,
    userAvatar: String,
    carId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Request", requestSchema);
