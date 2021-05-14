const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phraseSchema = new Schema({
  content: { type: String, required: true },
});

const Phrase = mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;