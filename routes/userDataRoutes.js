const express = require("express");
const { getAllUserData, createUserData, updateUserData, getUserData } = require("../controllers/userDataController");
const validateToken = require("../middleware/validate");
const router = express.Router();

router.route('/getUserdata').get(getAllUserData);
router.route('/getCurrentUserdata').get(validateToken,getUserData);
router.route('/createUserData').post(validateToken,createUserData);
router.route('/updateUserData').put(validateToken,updateUserData);

module.exports = router;