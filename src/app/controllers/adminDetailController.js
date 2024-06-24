const AdminDetail = require('../models/AdminDetail');

class AdminDetailController {
  async getAdminDetail(req, res) {
    try {
      let items = await AdminDetail.findAll();
      res.json({ "error_code": 0, items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}

module.exports = new AdminDetailController();
