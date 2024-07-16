const express = require("express");
const { getAllHospitals, deleteHospital, createHospital } = require("../controllers/hospitalController");
const router = express.Router();

router.route('/gethospital').get(getAllHospitals);
router.route('/delete').delete(deleteHospital);
router.route('/create').post(createHospital);

module.exports = router;