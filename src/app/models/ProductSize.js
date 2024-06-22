const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Product = require('./Product');

const ProductSize = sequelize.define('productSize', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  productID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'Ex: S, M, XL, XXL'
  },
  quantity: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = ProductSize;
