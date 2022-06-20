const express = require("express");
const cors = require("cors");
const { connectDatabase} = require("./db/conection");
const routes = require("./routes");
const CONFIG = require("./config");
const AWS = require("./aws/index");

(async () => {
    await connectDatabase(CONFIG.db);
})()

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
routes(app);

const PORT = CONFIG.port || 3001;

app.listen(PORT, function () {
  console.log("Servidor corriendo en el puerto 3001");
});
