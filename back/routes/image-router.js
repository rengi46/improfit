const {Router} = require("express");
const {getImage,postImage} = require("../controller/image-controller");
const multer = require("multer");
const storage = multer.diskStorage({ destination (req, file, cb) { cb(null, 'storage'); }, filename (req, file, cb) { cb(null, file.originalname); } }) 
const upload = multer({storage});

const imageRouter = Router();

imageRouter.get("/image/:id", getImage)
imageRouter.post("/image", upload.single('image'), postImage)



module.exports = imageRouter;