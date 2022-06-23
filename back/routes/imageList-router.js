//library
const {Router} = require("express");
//import files
const {getImageList} = require("../controller/image-controller");


const imageListRouter = Router();

imageListRouter.get("/imageList", getImageList)


module.exports = imageListRouter;