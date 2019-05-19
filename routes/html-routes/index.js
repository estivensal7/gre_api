// Dependencies
const router = require("express").Router();
const path = require("path");

// Item routes
router.use("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/../../public/index.html"));
});

//Exporting
module.exports = router;
