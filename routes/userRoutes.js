const express = require("express");
const {
  getUsers,
  createUser,
  getUserById,
} = require("../controllers/userCtrl");
const router = express.Router();

// create user
router.post("/create-user", createUser);

// get users
router.get("/get-user", getUsers);

/// get single user
router.get("/get-user/:id", getUserById);

module.exports = router;
