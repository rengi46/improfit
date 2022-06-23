//library
const {Router} = require("express");
//import files
const {getcommentsById,postcomment} = require("../controller/comments-controller");

const commentsRouter = Router();

commentsRouter.get("/comments/:id", getcommentsById)
commentsRouter.post("/comments", postcomment)


module.exports = commentsRouter;