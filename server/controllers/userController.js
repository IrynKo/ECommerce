const express = require("express");
const router = express.Router();
const userModel = require("../models/users/userModel");

const guard = require("../utils/guard");

router.post("/register", userModel.reg);
router.post("/login", userModel.login);
router.post("/logout", guard, userModel.logout);

module.exports = router;
