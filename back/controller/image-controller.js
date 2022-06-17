const response = require("../utils/responseModule");
const {addImageToDB,getImageToDB} = require("../services/image-strore");

async function getImage(req,res){
    const {id} = req.params;
    response.success(req,res,`getImageById${id}`);
}

async function postImage(req,res){
    const {title, url} = req.body;
    if(!title || !url ){
        response.error(req,res,`title and url are required`);
        return;
    }
    const image = await addImageToDB(title, url);
    response.success(req,res,image);
}

module.exports = {
    getImage,
    postImage
}