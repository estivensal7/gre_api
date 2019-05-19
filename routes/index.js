//Dependencies
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html-routes");

// API Routes
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.status(400).json(res);
});

module.exports = router;
