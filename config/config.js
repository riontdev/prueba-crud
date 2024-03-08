const config = {
  development: {
    username: "root",
    password: "pulpo",
    database: "prueba_crud_dev",
    host: "192.168.77.88",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: process.env.DB_TYPE,
  },
};

module.exports = config;
