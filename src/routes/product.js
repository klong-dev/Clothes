const express = require('express')
const router = express.Router();
const productController = require("../app/controllers/productController");

router.get("/all", productController.getItemsByCategoryID);
router.get("/:productID", productController.getItemByProductID);
router.get("/category/:categoryID", productController.getAllItems);


module.exports = router;
