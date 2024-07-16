/*const databaseConnection = require("./Config/Database");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !! server closing down");
  console.log(err.name);
  console.log(`ERROR : ${err.message}`);
  process.exit(1);
});

require("dotenv").config({ path: "./config.env" });
const app = require("./app");

databaseConnection();

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION !! server closing down");

  console.log(err.name);
  console.log(`ERROR : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
*/






const databaseConnection = require("./Config/Database");
require("dotenv").config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !! server closing down");
  console.log(err.name);
  console.log(`ERROR : ${err.message}`);
  process.exit(1);
});

require("dotenv").config({ path: "./config.env" });
const app = require("./app");

databaseConnection();

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION !! server closing down");

  console.log(err.name);
  console.log(`ERROR : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});






