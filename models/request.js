const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create your User Model

const requestSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    startDate: Date,
    endDate: Date,
    userAvatar: String,
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Request", requestSchema);
