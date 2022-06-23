const dotenv = require('dotenv');
dotenv.config();

// take variables with the .env
const data = {
  AWS: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    backetName: process.env.AWS_BUCKET_NAME,
  },
  db:process.env.NODE_ENV === "development" ? process.env.DB : process.env.DB_TEST,
  port : process.env.PORT
}
module.exports = data