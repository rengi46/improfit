//library
const {Router} = require("express");
const multer = require("multer");
//import files
const {postImage} = require("../controller/image-controller");

//init multer for take a file 
const storage = multer.diskStorage(
  { 
		destination (req, file, cb) { cb(null, 'storage'); },
    filename (req, file, cb) { cb(null, file.originalname); }
  }
)
const upload = multer({storage});
const imageRouter = Router();


imageRouter.post("/image", upload.single('image'), postImage)



module.exports = imageRouter;