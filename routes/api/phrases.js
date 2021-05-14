const router = require("express").Router();
const phrasesController = require("../../controllers/phraseController")

// Matches with "/api/phrases"
router.route("/")
  .get(phrasesController.findAll)
  .post(phrasesController.create);

module.exports = router;