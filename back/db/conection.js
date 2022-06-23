//library
const { connect } = require("mongoose");

const connectDatabase = async (db) => {
  await connect(db)
};

module.exports = {
  connectDatabase,
};
