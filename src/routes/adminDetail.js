const express = require('express')
const router = express.Router();
const adminDetailController = require("../app/controllers/adminDetailController");

router.get("/all", adminDetailController.getAdminDetail);
 

module.exports = router;
