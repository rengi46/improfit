const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    rank: Number,
    title: String,
    url: String,
    date:Date
});

const imageModel = mongoose.model('images', mySchema);
module.exports = imageModel;
