const express = require("express"); //* imports express.js
const routes = require("./routes"); //* imports /api/routes for all models
const sequelize = require("./config/connection"); //* imports sequelize connection

const app = express(); //* starts express
const PORT = process.env.PORT || 3001;

//*Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//* sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`App now listening on port ${PORT}!`));
});
