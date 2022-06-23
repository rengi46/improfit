//library
const express = require("express");
const cors = require("cors");
//import files
const { connectDatabase} = require("./db/conection");
const routes = require("./routes");
const CONFIG = require("./config");

//variables
const PORT = CONFIG.port || 3001;

(async () => {
  console.log(CONFIG.db);
  await connectDatabase(CONFIG.db);
})()

//initial api
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
routes(app);

const server = app.listen(PORT, function () {
  console.log("Server run in port 3001");
});

module.exports = {app,server}