const router = require("express").Router();
const registerRoutes = require("./Register");
const userRoutes = require("./Users");
const propertyRoutes = require("./Properties")

router.use("/register", registerRoutes);
router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);

module.exports = router;
