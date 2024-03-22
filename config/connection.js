require("dotenv").config();

const Sequelize = require("sequelize");

//* if deployed and active on heroku.JAWSDB then connect to heroku DB
//* else connect to localhost
const sequelize = process.env.JAWSDB_URL
   ? new Sequelize(process.env.JAWSDB_URL)
   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
           decimalNumbers: true,
        },
     });

module.exports = sequelize;
