



const { insertProdData, getProdData } = require('../products/proModel');
const { handleResponse } = require("../utils");

const proCreate = async (req, res) => {
    console.log("req.body");
    try {
        const { name, price, createdat, updatedat } = req.body;
        const dbresult = await insertProdData(name, price, createdat, updatedat);
        // return dbresult;
        res.send(handleResponse(201, "product created"));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in product creating"))
    }
}


const getProducts = async (req, res) => {
    // console.log("asg", req.params);
    // return req.params;
    const { id } = req.params;
    try {
        const dbresult = await getProdData(id);
        // return dbresult[0]; 
        res.send(handleResponse(201, "Here you got all products", dbresult[0]));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting products"));
    }
}
module.exports = { proCreate, getProducts };