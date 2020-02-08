const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glucoseSchema = new Schema({
  glucose: { type: Number, required: true },
  date: { type: Date },
  userId: { type: String, required: true}
});

const Glucose = mongoose.model("Glucose", glucoseSchema);

module.exports = Glucose;
