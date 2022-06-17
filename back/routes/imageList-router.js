const {Router} = require("express");

const imageListRouter = Router();

imageListRouter.get("/", ()=>{
    console.log("get coments")
})


module.exports = imageListRouter;