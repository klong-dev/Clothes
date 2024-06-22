const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;

const ProductVideo = sequelize.define('productVideo', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  video_path: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = ProductVideo;
