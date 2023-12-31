const router = require("express").Router();

// Import API Routes
const gampRoutes = require("./gamp-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");
const featuresRoutes = require("./features-routes");

// api routes
router.use("/features", featuresRoutes);
router.use("/gamp", gampRoutes);
router.use("/reviews", reviewRoutes); // Using reviewRoutes
router.use("/users", userRoutes);
router.use("/locations", locationRoutes);

module.exports = router;
