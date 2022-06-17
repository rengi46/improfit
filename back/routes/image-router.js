const {Router} = require("express");

const imageRouter = Router();

imageRouter.get("/", ()=>{
    console.log("get coments")
})


module.exports = imageRouter;