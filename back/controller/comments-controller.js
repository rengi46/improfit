const response = require("../utils/responseModule")
const {addcommentById,getCommentListById} = require("../services/comments-store");

async function getcommentsById(req,res){
    const {id} = req.params;
    response.success(req,res,`getcommentsById${id}`);
}

async function postcomment(req,res){
    const {imageId,comment} = req.body;
    if(!imageId || !comment ){
        response.error(req,res,`imageId and comment are required`);
        return;
    }
    res.send(`postcomment`);
}

module.exports = {
    getcommentsById,
    postcomment
}