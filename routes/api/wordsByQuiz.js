// Dependencies
const router = require("express").Router();
const wordsController = require("../../controller/wordsController");

// Matches with "/api/words/:quizId"
router.route("/:id").get(wordsController.findByQuiz);

// Exporting
module.exports = router;
