const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("find")
    db.Phrase
      .find({})
      .then(hackamoleDB => res.json(hackamoleDB))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Phrase
      .create(req.body)
      .then(hackamoleDB => res.json(hackamoleDB))
      .catch(err => res.status(422).json(err));
  },
};