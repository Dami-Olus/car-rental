const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create your User Model

const carSchema = new mongoose.Schema(
  {
    make: String,
    model: {
      type: String,
      required: true,
    },
    color: String,
    image: String,
    year: Number,
    location: String,
    rented: Boolean,
    rate: Number,
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
