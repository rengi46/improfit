const imageModel = require('../models/image-model');

const addImageToDB = async (title,url,rank) => {
    try{
        const image = await new imageModel({ title, url,rank });
        const imageSaved = await image.save();
        return imageSaved;
    }catch(err){
        return err;
    }
}

const getImageToDB = (req, res) => {

}

const getImageListToDB = async(req, res) => {
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
