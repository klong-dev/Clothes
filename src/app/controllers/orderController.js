const Order = require('../models/Order');

class OrderController {
  async getAllItems(req, res) {
    try {
      let items = await Order.findAll();
      res.json({ "error_code": 0, items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}

module.exports = new OrderController();
