const response = require("../utils/responseModule")
const {addcommentById,getCommentListById} = require("../services/comments-store");

async function getcommentsById(req,res){
    const {id} = req.params;
    if(!id){
        return response.error(res,400,"Bad Request");
    }
    const comentList = await getCommentListById(id);
    response.success(req,res,comentList);
}

async function postcomment(req,res){
    const {imageId,comment} = req.body;
    if(!imageId || !comment ){
        response.error(req,res,`imageId and comment are required`);
        return;
    }
    const comentList = await addcommentById(imageId,comment);

    response.success(req,res,comentList);
}

module.exports = {
    getcommentsById,
    postcomment
}