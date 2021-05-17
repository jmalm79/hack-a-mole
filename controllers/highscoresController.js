const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Highscore
      .find(req.query)
      .sort({ score: 'dec'})
      .then(hackamoleDB => res.json(hackamoleDB))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Highscore
      .create(req.body)
      .then(hackamoleDB => res.json(hackamoleDB))
      .catch(err => res.status(422).json(err));
  },
};