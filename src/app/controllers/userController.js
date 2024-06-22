const User = require('../models/User');

class UserController {
  async getAllItems(req, res) {
    try {
      let items = await User.findAll();
      res.json({ "error_code": 0,  items });
    } catch (error) {
      res.json({ "error_code": 1, "message": error });
    }
  }
}

module.exports = new UserController();
