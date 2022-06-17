const {Router} = require("express");
const {getImageList} = require("../controller/imageList-controller");

const imageListRouter = Router();

imageListRouter.get("/imageList", getImageList)


module.exports = imageListRouter;