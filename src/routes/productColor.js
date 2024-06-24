const express = require('express')
const router = express.Router();
const productColorController = require("../app/controllers/productColorController");

router.get("/all", productColorController.getProductColors);

module.exports = router;
