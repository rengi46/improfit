//library
const AWS = require('aws-sdk');
//import files
const config = require('../config');

//init s3 for a save image
const s3 = new AWS.S3({
  accessKeyId: config.AWS.accessKeyId,
  secretAccessKey: config.AWS.secretAccessKey,
});


module.exports = s3;