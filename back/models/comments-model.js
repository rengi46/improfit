//library
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema from the comment object
const mySchema = new Schema({
  //id relation with image
  imageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"images"
  },
  //array from the comments
  comments: [{
    type:String
  }]
});

const model = mongoose.model('coments', mySchema);
module.exports = model;
