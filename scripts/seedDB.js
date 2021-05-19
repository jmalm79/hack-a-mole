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
    "name": "Ashley",
    "score":  "70"
  },
  {
    "name": "Daniel",
    "score":  "76"
  },
  {
    "name": "Michael",
    "score":  "42"
  },
  {
    "name": "Shannon",
    "score":  "75"
  },
  {
    "name": "Hannah",
    "score":  "67"
  },
  {
    "name": "Kady",
    "score":  "80"
  },
  {
    "name": "Moe",
    "score":  "76"
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