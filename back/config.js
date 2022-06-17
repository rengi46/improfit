const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: process.env.DB,
    port : process.env.PORT
}