const commentsModel = require('../models/comments-model');

const addCommentToDB = async(imageId,comment) => {
    try{
        const commentsList = await commentsModel.findOne({imageId:imageId});
        if(!commentsList){
            const comments = await new commentsModel({ imageId, comments: [comment] });
            const commentsSaved = await comments.save();
            return commentsSaved;
        }
        commentsList.comments.push(comment);
        const commentsSaved = await commentsList.save();
        return commentsSaved;
    }catch(err){
        return err;
    }
}

const getCommentListToDB =async (id) => {
    try{
        const comentList = await commentsModel.find({imageId:id});
        return comentList;
    }catch(err){
        return err;
    }
}

module.exports = {
    addCommentToDB,
    getCommentListToDB
}