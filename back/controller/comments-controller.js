const response = require("../utils/responseModule")
const {addCommentToDB,getCommentListToDB} = require("../services/comments-store");

async function getcommentsById(req,res){
    const {id} = req.params;
    if(!id){
        return response.error(res,400,"Bad Request");
    }
    const comentList = await getCommentListToDB(id);
    response.success(req,res,comentList);
}

async function postcomment(req,res){
    const {imageId,comment} = req.body;
    if(!imageId || !comment ){
        response.error(req,res,`imageId and comment are required`);
        return;
    }
    const comentList = await addCommentToDB(imageId,comment);

    response.success(req,res,comentList);
}

module.exports = {
    getcommentsById,
    postcomment
}