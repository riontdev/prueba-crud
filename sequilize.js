const { Sequelize } = require("sequelize");
const config = require("./config/config");

const enviroment =
  process.env.NODE_ENV == "production" ? config.production : config.development;
const sequelize = new Sequelize(enviroment);

module.exports = sequelize;
