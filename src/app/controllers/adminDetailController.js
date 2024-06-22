const AdminDetail = require('../models/AdminDetail');

class AdminDetailController {
  async getAllItems(req, res) {
    try {
      let items = await AdminDetail.findAll();
      res.json({ "error_code": 0, "message": items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}

module.exports = new AdminDetailController();
