const router = require("express").Router();
const { createRecord, getRecords, updateRecord, deleteRecord } = require("../controllers/recordController");

// ✅ IMPORT BOTH
const { protect, checkRole } = require("../middleware/authMiddleware");

// ✅ USE MIDDLEWARE
router.post("/", protect, createRecord);
router.get("/", protect, getRecords);

// If you want role-based:
router.get("/admin", checkRole(["admin"]), getRecords);

router.put("/:id", protect, updateRecord);
router.delete("/:id", protect, deleteRecord);

module.exports = router;