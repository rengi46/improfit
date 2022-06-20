const dotenv = require('dotenv');
dotenv.config();


const data = {
    AWS: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_PRIVATE_KEY,
        backetName: process.env.AWS_BUCKET_NAME,
    },
    db: process.env.DB,
    port : process.env.PORT
}
module.exports = data