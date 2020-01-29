const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glucoseSchema = new Schema({
  glucose: { type: Number, required: true },
  date: { type: Date, default: Date.now }
  
});

const Glucose = mongoose.model("Glucose", glucoseSchema);

module.exports = Glucose;
