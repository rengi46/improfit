//import files
const imageModel = require('../models/image-model');

// save the info to mongoDB
const addImageToDB = async (title,url,rank,date) => {
  try{
    console.log(1);
    const image = await new imageModel({ title, url,rank ,date});
    console.log(2);
    const imageSaved = await image.save();
    console.log(3);
    return imageSaved;
  }catch(err){
    console.log(-1);
    return err;
  }
}

//get specific image info depending of rank
const getImageToDB = async(rank) => {
  try{
    return imageModel.findOne({"rank":rank})
  }catch(err){
    return err;
  }
}

//get all image info
const getImageListToDB = async() => {
  try{
    return imageModel.find()
  }catch(err){
    return err;
  }
}

module.exports = {
  addImageToDB,
  getImageToDB,
  getImageListToDB
}
