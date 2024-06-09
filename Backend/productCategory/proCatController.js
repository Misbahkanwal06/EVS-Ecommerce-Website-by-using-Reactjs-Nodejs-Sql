

// const dbSql = require('../dbs');
const { insertIntoCat, getCategoriesData } = require('../productCategory/prodCatModel');
const { handleResponse } = require("../utils");

const catCreate = async (req, res) => {
    console.log("req.body");
    //  return req.body;
    try {
        const { procatId, catname, createdat, updatedat } = req.body;
        const res = await insertIntoCat(procatId, catname, createdat, updatedat);
        res.send(handleResponse(201, "Product Category added"),);
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in creating category"));
    }
}

const getCategories = async (req, res) => {
    console.log("here");
    try {
        const dbresult = await getCategoriesData();
        // return dbresult;
        res.send(handleResponse(201, "Here you got all categories", dbresult));

    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting Categories"));
    }
}

module.exports = { catCreate, getCategories };