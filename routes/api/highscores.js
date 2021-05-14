const router = require("express").Router();
const highscoresController = require("../../controllers/highscoresController")

// Matches with "/api/highscores"
router.route("/")
  .get(highscoresController.findAll)
  .post(highscoresController.create);

module.exports = router;
