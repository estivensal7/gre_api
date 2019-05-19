// Dependencies
const router = require("express").Router();
const wordRoutes = require("./words");
const quizRoutes = require("./quizzes");
const wordsByQuizRoutes = require("./wordsByQuiz");

// Item routes
router.use("/words", wordRoutes);
router.use("/quizzes", quizRoutes);
router.use("/words-by-quiz", wordsByQuizRoutes);

//Exporting
module.exports = router;
