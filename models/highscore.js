const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const highscoreSchema = new Schema({
  score: { type: Number, required: true },
  name: { type: String, required: true },
});

const Highscore = mongoose.model("Highscore", highscoreSchema);

module.exports = Highscore;
