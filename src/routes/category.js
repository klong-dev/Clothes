const express = require('express')
const router = express.Router();
const categoryController = require("../app/controllers/categoryController");

router.get("/load", categoryController.getAllItems);

module.exports = router;
