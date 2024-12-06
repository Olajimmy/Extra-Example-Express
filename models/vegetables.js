const mongoose = require("mongoose");

const vegetablesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  { timestamps: true }
);

const Vege = mongoose.model("vegetable", vegetablesSchema);
module.exports = Vege;
