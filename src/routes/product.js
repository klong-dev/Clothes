const express = require('express')
const router = express.Router();
const productController = require("../app/controllers/productController");

router.get("/load-category", productController.getItemsByCategoryID);
router.get("/load", productController.getAllItems);


module.exports = router;
