const ProductColor = require('../models/ProductColor');

class ProductColorController {

  async getProductColors(req, res) {
    try {
      let items = await ProductColor.findAll()
      res.json({ "error_code": 0, items })
    } catch (error) {
      res.json({ "error_code": 1, "message": error })
    }
  }

  async getProductColorByProductID() {
    try {
      let { productID } = req.params
      let items = ProductColor.findAll({
        where: {
          productID
        }
      })
    } catch (error) {
      res.json({ "error_code": 1, "message": error })
    }
  }

}
module.exports = new ProductColorController();