const Category = require('../models/Category');

class CategoryController {
  async getAllItems(req, res) {
    try {
      let items = await Category.findAll();
      res.json({ "error_code": 0,  items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}

module.exports = new CategoryController();
