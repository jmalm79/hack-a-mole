const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hackamoleDB"
);

const phraseSeed = [
  {
    "content": "sucks to suck"
  },
  {
    "content": "you done messed up a a ron"
  },
  {
    "content": "a dead raccoon could write better code"
  },
  {
    "content": "idiot sandwich"
  },
  {
    "content": "that was bad"
  },
  {
    "content": "whiffed it"
  },
  {
    "content": "it's pronounced concatenation"
  }
];

const highscoreSeed = [
  {
    "name": "Brandon",
    "score":  "12"
  },
  {
    "name": "Moe",
    "score":  "13"
  }
]

db.Phrase
  .remove({})
  .then(() => db.Phrase.collection.insertMany(phraseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Highscore
.remove({})
.then(() => db.Highscore.collection.insertMany(highscoreSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});