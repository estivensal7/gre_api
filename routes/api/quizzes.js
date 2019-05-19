// Dependencies
const router = require("express").Router();
const quizzesController = require("../../controller/quizzesController");

// Matches with "/api/items"
router.route("/")
	.get(quizzesController.findAll)
	.post(quizzesController.create);

// Matches with "/api/items/:id"
router.route("/:id")
	.get(quizzesController.findById)
	.put(quizzesController.update)
	.delete(quizzesController.remove);

// Exporting
module.exports = router;
