const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    imageId: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref:"images"
              },
    comments: [{
                  type:String
              }]
});

const model = mongoose.model('coments', mySchema);
module.exports = model;
