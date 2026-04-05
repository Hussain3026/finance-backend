const router = require("express").Router();
const { createUser, getUsers, updateUser } = require("../controllers/userController.js");

router.post("/", createUser);
router.get("/", getUsers);
router.patch("/:id", updateUser);
module.exports = router;