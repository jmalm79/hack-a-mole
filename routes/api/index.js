const router = require("express").Router();

const highscoresRoutes = require("./highscores")
const phrasesRoutes = require("./phrases")

// routes
router.use("/highscores", highscoresRoutes)
router.use("/phrases", phrasesRoutes);

module.exports = router;