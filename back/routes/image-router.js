const {Router} = require("express");
const {getImageById,postImage} = require("../controller/image-controller");

const imageRouter = Router();

imageRouter.get("/image/:id", getImageById)
imageRouter.post("/image", postImage)



module.exports = imageRouter;