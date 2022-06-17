const {Router} = require("express");
const {getImage,postImage} = require("../controller/image-controller");

const imageRouter = Router();

imageRouter.get("/image/:id", getImage)
imageRouter.post("/image", postImage)



module.exports = imageRouter;