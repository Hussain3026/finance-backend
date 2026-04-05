const router = require("express").Router();
const { getSummary } = require("../controllers/dashboardController");

// ✅ correct import
const { checkRole } = require("../middleware/authMiddleware");

// ✅ use middleware
router.get("/", checkRole(["admin", "analyst"]), getSummary);

module.exports = router;