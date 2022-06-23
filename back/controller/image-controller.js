//library
const fs = require('fs');
const multer = require("multer");
//import files
const response = require("../utils/responseModule");
const {addImageToDB, getImageListToDB} = require("../services/image-strore");
const { newCommentsImage } = require('./comments-controller');
const s3 = require("../aws/index");
const config = require("../config");

//init multer for take a file 
const storage = multer.diskStorage({ destination (req, file, cb) { cb(null, 'storage/uploads/images'); }, filename (req, file, cb) { cb(null, file.originalname); } }) 
const upload = multer({storage});

//get all image
async function getImageList(req,res){
  const imageList = await getImageListToDB();
  response.success(req,res,imageList);
}

//save the image and info 
async function postImage(req,res){
  try{
    const {title} = req.body;
    const {file} = req;
    if(!title || !file ) return response.error(req,res,`title and file are required`)
    //upload the image to the aws s3
    const url = await fileToUrl(file);
    //get last number rank +1
    const rank = await getRank();
    //upload image info to mongoDB
    const image = await addImageToDB(title, url,rank,new Date());
    //created the array for a comments on this image
    await newCommentsImage(image._id);
    response.success(req,res,image);
  }catch(err){
    response.error(req,res,err);
  }
}

//save the image
async function fileToUrl(file){
  const imagePath = file.path;
  const blob = fs.readFileSync(imagePath);
  const uploadedImage = await s3.upload({
    Bucket: config.AWS.backetName,
    Key: file.originalname,
    Body: blob,
  }).promise()
  fs.unlink(`./storage/${file.originalname}`,(err)=>{
    if(err) return console.log(err);
  })
  return uploadedImage.Location;
}

//retun the rank with the new photo
async function getRank(){
  const imageList = await getImageListToDB()
  const rank = imageList? imageList.length + 1: 1;
  return rank;
}

module.exports = {
  getImageList,
  postImage
}