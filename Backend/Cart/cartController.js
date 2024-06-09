



const dbSql = require("../dbs");
const { insertData, viewData, addDAta, deleteData, viewCartItem, deletecart } = require('./cartModel');
const { handleResponse } = require('../utils');
const jwt = require("jsonwebtoken");

// const {  tokenVerification } = require('../Security/jwtToken');

const createCart = async (req, res) => {
    try {
        console.log("123");
        const { prodId, custId, quantity } = req.body;
        let createdAt = new Date();
        let isOrder = 0;
        const dbresult = await insertData(prodId, quantity, custId, isOrder, createdAt)
        res.send(handleResponse(201, "Your product has been added to the cart"));

        // return dbresult;
        // const isOrder = req.body.isOrder !== undefined ? req.body.isOrder : 0;
        // const query = "INSERT INTO cart(`prodId`, `quant`, `isOrder`, `custId`) VALUES (?, ?, ?, ?)";

        // const query = "INSERT INTO cart(`prodId`,`quant`, `custId`,`isOrder`,`createdAt`) VALUES (?, ?, ?, ?, ?)";
        // for (let i = 0; i < quantity; i++) {
        //     const values = [prodId, 1, custId, isOrder, createdAt];
        //     await dbSql.execute(query, values);
        // }

    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in adding product to cart"));
    }
}



const getCart = async (req, res) => {
    const { custId } = req.params;
    // return custId;
    try {
        const query = `SELECT  p.proName,p.prodImages, p.price ,cs.fName, cs.lName,  c.custId, pc.proCatId, p.proID, pc.catName, 
        SUM(quant) as TotalQuantity FROM cart c 
        JOIN customer cs ON cs.cstId = c.custId 
        join products p on p.proID = c.prodId
        join product_category pc on pc.proCatId=p.categoryId
        where c.custId=${custId} 
        GROUP BY c.custId, p.proID `;

        // SELECT c.cartId, p.proName, p.prodImages, p.price, cs.fName, cs.lName, c.custId, pc.proCatId, p.proID, pc.catName, 
        // SUM(quant) as TotalQuantity 
        // FROM cart c 
        // JOIN customer cs ON cs.cstId = c.custId 
        // JOIN products p ON p.proID = c.prodId
        // JOIN product_category pc ON pc.proCatId=p.categoryId
        // WHERE c.custId =20
        // GROUP BY c.cartId, p.proID, c.custId;

        const dbresult = await dbSql.execute(query);
        console.log("customer cart", dbresult);
        // return dbresult[0];
        res.send(handleResponse(201, "Here you got all products", dbresult[0]));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting products"));
    }
}


const updateCart = async (req, res) => {
    const { custId, prodID } = req.params;
    // const {custId, prodID} = req.query;
    const { updateQuan } = req.body;
    console.log("ahsdh", custId, prodID, updateQuan);
    try {
        const dbresult = await viewData(custId, prodID, updateQuan);
        // return dbresult;
        // console.log("abcd", dbresult)
        let productQuantity = dbresult.TotalQuantity;
        // console.log("productQuantity", productQuantity);
        // console.log("updateQty", updateQuan)

        // return updateQuan>productQuantity
        if (Number(updateQuan) > Number(productQuantity)) {
            console.log("in if")
            //Kitna plus kerna hy 
            let qtytoAdd = updateQuan - productQuantity
            console.log("qtytoAdd", qtytoAdd);
            // return qtytoAdd //ye wo quantity hy jitni add kerni hy 
            // let totalQuant = parseInt(productQuantity) + parseInt(updateQuan);
            const dbresult = await addDAta(custId, prodID, qtytoAdd);
            console.log("iffff", dbresult);
            res.send(handleResponse(201, "Inserted in card", dbresult));
        }
        else if (Number(updateQuan) < Number(productQuantity)) {
            console.log("in else if")
            let qtytoremove = productQuantity - updateQuan;
            console.log("decrease", qtytoremove);
            try {
                const dbresult = await viewCartItem(prodID, custId);
                console.log("abc", dbresult);
                // return dbresult.length
                let dbResp;
                for (let i = 0; i < qtytoremove; i++) {
                    //pass kia kerna hy 
                    console.log(dbresult[i].cartId);
                    dbResp = await deleteData(custId, prodID, dbresult[i].cartId);
                }
                console.log("dbResp", dbResp);
                // res.send(handleResponse(201, "Inserted in card", dbResp));
            } catch (error) {
                console.log(error);
                res.send(handleResponse(500, "Error in deletion from cart"));

            }

            //  await deleteData(custId, prodID,qtytoremove);
            // // console.log("else if ", dbresult); 
            // res.send(handleResponse(201, "Here you got all products", dbresult));
        }
        else {
            res.send(handleResponse(201, "Products updated in cart", dbresult));
        }
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in Inserting data"));
    }
}


const deleteCart = async (req, res) => {
    const { custId, prodID } = req.params;
    // return req.params;
    try {
        const dbresult = await deletecart(custId, prodID);
        res.send(handleResponse(201, " your cart has deleted ", dbresult));
        return dbresult;
    } catch (error) {
        res.send(handleResponse(500, "Error in deleting cart"));
    }

}

module.exports = { createCart, getCart, updateCart, deleteCart }









