const AWS = require('aws-sdk');
const config = require('../config');


const s3 = new AWS.S3({
    accessKeyId: config.AWS.accessKeyId,
    secretAccessKey: config.AWS.secretAccessKey,
});

// s3.listBuckets({},(err, data) => {
//     if (err) {
//         console.log("error",err);
//     } else {
//         console.log(data.Buckets);
//     }
// })


module.exports = s3;