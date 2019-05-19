// Dependencies
const router = require("express").Router();
const wordsController = require("../../controller/wordsController");

// Matches with "/api/words"
router.route("/")
	.get(wordsController.findAll)
	.post(wordsController.create);

// Matches with "/api/words/:id"
router.route("/:id")
	.get(wordsController.findById)
	.put(wordsController.update)
	.delete(wordsController.remove);

// Exporting
module.exports = router;
