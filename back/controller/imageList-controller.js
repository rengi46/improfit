const response = require("../utils/responseModule")

async function getImageList(req,res){
    response.success(req,res,`getImageList`);
}

module.exports = {
    getImageList
}