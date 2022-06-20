const {Router} = require("express");
const {getImage,postImage} = require("../controller/image-controller");
const multer = require("multer");
const storage = multer.diskStorage({ destination (req, file, cb) { cb(null, 'storage'); }, filename (req, file, cb) { cb(null, file.originalname); } }) 
const upload = multer({storage});

const imageRouter = Router();
// app.post('/upload', upload.single('image'), (req, res) => { if(req.file) { // I can access req.body from here if I want res.json(req.file); } else throw 'error'; });

imageRouter.get("/image/:id", getImage)
imageRouter.post("/image", upload.single('image'), postImage)



module.exports = imageRouter;