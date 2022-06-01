const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the APInot found
router.use(function(req, res) {
    res.status(404).send("api not found!")
});

module.exports = router;
