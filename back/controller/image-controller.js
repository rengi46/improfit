const fs = require('fs');
const response = require("../utils/responseModule");
const multer = require("multer");

const {addImageToDB,getImageToDB, getImageListToDB} = require("../services/image-strore");
const { newCommentsImage } = require('./comments-controller');
const s3 = require("../aws/index");
const config = require("../config");

const storage = multer.diskStorage({ destination (req, file, cb) { cb(null, 'storage/uploads/images'); }, filename (req, file, cb) { cb(null, file.originalname); } }) 
const upload = multer({storage});

async function getImage(req,res){
    try{
        const {id} = req.params;
        if(!id){
            return response.error(res,400,"Bad Request");
        }
        const image = await getImageToDB(id);
        response.success(req,res,image);
    }catch(err){
        response.error(req,res,err);
    }
}

async function postImage(req,res){
    try{
        const {title} = req.body;
        const {file} = req;
        if(!title || !file ){
            response.error(req,res,`title and url are required`);
            return;
        }
        const url = await fileToUrl(file);
        const rank = await getRank();
        const image = await addImageToDB(title, url,rank);
        await newCommentsImage(image._id);
        response.success(req,res,image);
    }catch(err){
        response.error(req,res,err);
    }
}


async function fileToUrl(file){
    const imagePath = file.path;
    const blob = fs.readFileSync(imagePath);
    const uploadedImage = await s3.upload({
        Bucket: config.AWS.backetName,
        Key: file.originalname,
        Body: blob,
    }).promise()
    return uploadedImage.Location;
}


async function getRank(){
    const imageList = await getImageListToDB()
    const rank = imageList? imageList.length + 1: 1;
    return rank;
}

module.exports = {
    getImage,
    postImage
}