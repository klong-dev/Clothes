const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;

const Communicate = sequelize.define('communicate', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Communicate;
