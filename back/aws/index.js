const AWS = require('aws-sdk');
const config = require('../config');


const s3 = new AWS.S3({
    accessKeyId: config.AWS.accessKeyId,
    secretAccessKey: config.AWS.secretAccessKey,
});


module.exports = s3;