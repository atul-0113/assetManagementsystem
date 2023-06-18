const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controller/user");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/create", addUser);
router.get("/:userId", getUserById);
router.delete("/:userId", deleteUser);
router.patch("/:userId", updateUser);

module.exports = router;
