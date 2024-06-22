const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const User = require('./User');
const Product = require('./Product');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  pID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  time_created: {
    type: DataTypes.DATE,
    allowNull: false
  },
  time_updated: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
});

module.exports = Order;
