const router = require("express").Router();
const glucoseRoutes = require("./glucose");

// Book routes
router.use("/glucose", glucoseRoutes);

module.exports = router;