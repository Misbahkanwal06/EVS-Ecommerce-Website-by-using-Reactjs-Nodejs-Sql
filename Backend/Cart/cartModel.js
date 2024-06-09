


const dbSql = require("../dbs");

const insertData = async (prodId, quantity, custId, isOrder, createdAt) => {
    // console.log(prodId,quantity,custId,isOrder,createdAt);
    try {
        const insertQuery = `INSERT INTO cart(prodId, quant, custId,isOrder,createdAt) VALUES ?`;
        let values = []
        for (let i = 0; i < quantity; i++) {
            values.push([prodId, 1, custId, isOrder, createdAt])
        }
        console.log("insertQuery")
        console.log(insertQuery)
        console.log(values)
        return await dbSql.query(insertQuery, [values], function (err) {
            if (err) throw err;
            dbSql.end();
        });

        // for (let i = 0; i < quantity; i++) {
        //     const values = [prodId, 1, custId, isOrder, createdAt];
        //     await dbSql.execute(query, values);
        // }
        // let dbresult;
        // for (let i = 0; i < quantity; i++) {
        //     const values = [prodId, 1, custId, isOrder, createdAt];
        //     dbresult= await dbSql.execute(insertQuery, values);
        // }
        // return dbresult;

    } catch (error) {
        console.log(error);
        throw new Error("Error in inserting in model");
    }
}

const viewData = async (custId, prodID) => {
    try {
        const query = `SELECT p.proName,p.prodImages, p.price ,cs.fName, cs.lName, c.custId, pc.proCatId, p.proID, pc.catName, 
        SUM(quant) as TotalQuantity FROM cart c 
        JOIN customer cs ON cs.cstId = c.custId 
        join products p on p.proID = c.prodId
        join product_category pc on pc.proCatId=p.categoryId
        where c.custId=${custId} AND c.prodId= ${prodID}
        GROUP BY prodId, custId`;
        const dbresult = await dbSql.execute(query);
        console.log("in model1", dbresult[0][0]);
        return dbresult[0][0];
    } catch (error) {
        console.log(error);
        throw new Error("Error in updating model");
    }
}


const addDAta = async (custId, prodId, qtytoAdd) => {
    try {
        const createdAt = new Date();
        let query = `INSERT INTO cart (prodId, quant, custId, isOrder, createdAt) VALUES ?`;
        let values = []
        // let dbresult;
        for (let i = 0; i < qtytoAdd; i++) {
            values.push([prodId, 1, custId, 0, createdAt])
        }
        console.log("query")
        console.log(query)
        console.log(values)
        return await dbSql.query(query, [values], function (err) {
            if (err) throw err;
            dbSql.end();
        });

        // console.log("111", dbresult);
        // const dbResp=await dbSql.execute(query,values);
        // return dbResp[0]
        // for (let i = 0; i <  qtytoAdd; i++) {
        //     const values = [prodId, 1, custId, isOrder, createdAt];
        //     dbresult = await dbSql.execute(query, values);
        // }
        // console.log("Inserted rows:", dbresult[0]);
        // return dbresult[0];

    } catch (error) {
        console.log(error);
        throw new Error("Error in updating data");
    }

}

// const viewCartItem = async (prodId, custId, isOrder) => {
//     try {
//         const viewQuery = `SELECT cartId, TotalQuantity FROM cart WHERE prodId=${prodId} AND custId=${custId} AND isOrder=${isOrder}`;
//         const dbresult = await dbSql.execute(viewQuery);
//         return dbresult[0];
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }


const viewCartItem = async (prodId, custId) => {
    try {
        const viewQuery = `SELECT * FROM cart where prodId=${prodId} AND custId=${custId}`
        const dbresult = await dbSql.execute(viewQuery);
        // console.log("ans", dbresult);
        return dbresult[0];
        //   console.log("in model1", dbresult[0][0]);
        return dbresult[0][0];
    } catch (error) {

    }
}


const deleteData = async (custId, prodID, cartId) => {
    try {
        const query = `DELETE FROM cart WHERE cartId=${cartId} AND custId=${custId} AND prodID=${prodID} `
        let dbresult;
        dbresult = await dbSql.execute(query, [cartId]);
        // dbresult = await dbSql.execute(query);
        console.log("deleted rows:", dbresult[0]);
        return dbresult[0];
    } catch (error) {
        console.log(error);
        throw new Error("Error in updating data");
    }
}


const deletecart = async (custId, prodID) => {

    try {
        const query = `DELETE FROM cart WHERE custId=${custId} AND prodID=${prodID}`
        
        // let dbresult;
        // dbresult = await dbSql.execute(query, [custId]);
        let dbresult = await dbSql.execute( query);
        // dbresult = await dbSql.execute(query);
        console.log("deleted rows:", dbresult[0]);
        return dbresult[0];
    } catch (error) {
        console.log(error);
        throw new Error("Error in updating data");
    }
}


module.exports = { insertData, viewData, addDAta, deleteData, viewCartItem, deletecart };