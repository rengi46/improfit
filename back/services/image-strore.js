const imageModel = require('../models/image-model');

const addImageToDB = async (title,url,rank,date) => {
    try{
        const image = await new imageModel({ title, url,rank ,date});
        const imageSaved = await image.save();
        return imageSaved;
    }catch(err){
        return err;
    }
}

const getImageToDB = async(rank) => {
    try{
        return imageModel.findOne({"rank":rank})
    }catch(err){
        return err;
    }
}

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
