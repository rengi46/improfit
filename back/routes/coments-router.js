const {Router} = require("express");
const {getComentsById,postComent} = require("../controller/coments-controller");

const comentsRouter = Router();

comentsRouter.get("/coments/:id", getComentsById)
comentsRouter.post("/coments", postComent)


module.exports = comentsRouter;