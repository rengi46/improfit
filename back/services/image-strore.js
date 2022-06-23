//import files
const imageModel = require('../models/image-model');

// save the info to mongoDB
const addImageToDB = async (title,url,rank,date) => {
  try{
    const image = await new imageModel({ title, url,rank ,date});
    const imageSaved = await image.save();
    return imageSaved;
  }catch(err){
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
