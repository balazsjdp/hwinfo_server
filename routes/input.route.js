const express = require("express");
const router = express.Router();

const InputController = require("../controllers/input.controller");


router.post('/updateHardwareData',InputController.update_hardware_info);



module.exports = router;