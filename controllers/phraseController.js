const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Phrase
    // This is a Nej note. I'm not sure if this will be a find all or a find one by random to feed phrases into the text-to-speech generator
      // .find(req.query)
      // .sort({ })
      // .then(hackamoleDB => res.json(hackamoleDB))
      // .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Phrase
      .create(req.body)
      .then(hackamoleDB => res.json(hackamoleDB))
      .catch(err => res.status(422).json(err));
  },
};