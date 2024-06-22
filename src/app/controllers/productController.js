const Product = require('../models/Product');

class ProductController {

  async getAllItems(req, res) {
    try {
      let items = await Product.findAll()
      res.json({ "error_code": 0, items })
    } catch (error) {
      res.json({ "error_code": 1, "message": error })
    }
  }

  
  async getItemsByCategoryID(req, res) {
    const { categoryID } = req.query;
    try {
      let items = await Product.findAll({
        where: {
          categoryID  
        }
      });
      res.json({ "error_code": 0, items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }

  async getItemByProductID(req, res) {
    const { productID } = req.query;
    try {
      let item = await Product.findOne({
        where: {
          id: productID
        }
      });
      if (item) {
        res.json({ "error_code": 0,  item });
      } else {
        res.json({ "error_code": 1, "message": "Product not found" });
      }
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}
module.exports = new ProductController();