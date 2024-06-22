const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(11),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = User;
