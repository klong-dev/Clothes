const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Communicate = require('./Communicate');

const AdminDetail = sequelize.define('adminDetail', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  communicateID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Communicate,
      key: 'id'
    }
  },
  fanpage: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = AdminDetail;
