const response = require("../utils/responseModule")
const {getImageListToDB} = require("../services/image-strore");

async function getImageList(req,res){
    const imageList = await getImageListToDB();
    response.success(req,res,imageList);
}

module.exports = {
    getImageList
}