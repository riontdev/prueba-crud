const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequilize");

const User = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
