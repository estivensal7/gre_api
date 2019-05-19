// Dependencies
const router = require("express").Router();
const wordRoutes = require("./words");
const quizRoutes = require("./quizzes");

// Item routes
router.use("/words", wordRoutes);
router.use("/quizzes", quizRoutes);

//Exporting
module.exports = router;
