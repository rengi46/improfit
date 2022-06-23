//import files
const response = require("../utils/responseModule")
const {newCommentsByImage,addCommentToDB,getCommentListToDB} = require("../services/comments-store");

//take a comments by specific image
async function getcommentsById(req,res){
  const {id} = req.params;
  if(!id) return response.error(res,400,"Bad Request");
  const comentList = await getCommentListToDB(id);
  response.success(req,res,comentList);
}

//add a new comment in a specific image
async function postcomment(req,res){
  const {imageId,comment} = req.body;
  if(!imageId || !comment ) return response.error(req,res,`imageId and comment are required`)
  const comentList = await addCommentToDB(imageId,comment);
  response.success(req,res,comentList);
}

//add a comment array with a new photo
async function newCommentsImage(id){
  const comments = await newCommentsByImage(id);
  return comments;
}

module.exports = {
  newCommentsImage,
  getcommentsById,
  postcomment
}