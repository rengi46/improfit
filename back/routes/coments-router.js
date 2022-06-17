const {Router} = require("express");

const comentsRouter = Router();

comentsRouter.get("/", (req,res)=>{
    console.log("get coments")
    res.send("get coments")
})


module.exports = comentsRouter;