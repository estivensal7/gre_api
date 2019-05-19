// Dependencies
const router = require("express").Router();
const quizzesController = require("../../controller/quizzesController");

// Matches with "/api/quizzes"
router.route("/")
	.get(quizzesController.findAll)
	.post(quizzesController.create);

// Matches with "/api/quizzes/:id"
router.route("/:id")
	.get(quizzesController.findById)
	.put(quizzesController.update)
	.delete(quizzesController.remove);

// Exporting
module.exports = router;
