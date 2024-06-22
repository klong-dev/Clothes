const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Category = require('./Category');
const ProductVideo = require('./ProductVideo');

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  total_quantity: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  categoryID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  },
  videoID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: ProductVideo,
      key: 'id'
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  sale: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  sold_time: {
    type: DataTypes.BIGINT,
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
  timestamps: false
});

module.exports = Product;
