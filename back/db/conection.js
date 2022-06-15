const { connect, connection } = require("mongoose");
const CONFIG = require("../config");

const connectDatabase = async () => {
    await connect(CONFIG.db)
};

module.exports = {
  connectDatabase,
  connection,
};
