//library
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema from a image object
const mySchema = new Schema({
  rank: Number,
  title: String,
  url: String,
  date:Date
});

const imageModel = mongoose.model('images', mySchema);
module.exports = imageModel;
