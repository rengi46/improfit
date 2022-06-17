const response = require("../utils/responseModule")

async function getImageById(req,res){
    const {id} = req.params;
    response.success(req,res,`getImageById${id}`);
}

async function postImage(req,res){
    response.success(req,res,`postImage`);
}

module.exports = {
    getImageById,
    postImage
}