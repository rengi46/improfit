//import files
const commentsModel = require('../models/comments-model');

//create array of comments with a new image
const newCommentsByImage = async(imageId) => {
  const comments = await new commentsModel({ imageId, comments: [] });
  const commentsSaved = await comments.save();
  return commentsSaved;
}

//add a new comment in the image id array 
const addCommentToDB = async(imageId,comment) => {
  try{
    const commentsList = await commentsModel.findOne({imageId:imageId});
    commentsList.comments.push(comment);
    const commentsSaved = await commentsList.save();
    return commentsSaved;
  }catch(err){
    return err;
  }
}
//get array comments from image id
const getCommentListToDB =async (id) => {
  try{
    const comentList = await commentsModel.find({imageId:id});
    return comentList;
  }catch(err){
    return err;
  }
}

module.exports = {
    newCommentsByImage,
    addCommentToDB,
    getCommentListToDB
}