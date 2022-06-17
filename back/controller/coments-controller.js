const response = require("../utils/responseModule")

async function getComentsById(req,res){
    const {id} = req.params;
    response.success(req,res,`getComentsById${id}`);
}

async function postComent(req,res){
    res.send(`postComent`);
}

module.exports = {
    getComentsById,
    postComent
}