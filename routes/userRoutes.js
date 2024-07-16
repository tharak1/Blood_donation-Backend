const express = require("express");
const { loginUser, registerUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validate");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/current").get(validateToken,currentUser);

module.exports = router;