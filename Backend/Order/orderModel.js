



const dbSql = require("../dbs");


const getData = async (custId, quantity, prodid) => {
    console.log("custId,quantity,prodid", custId, quantity, prodid);
    const query = `SELECT * from cart c where custId=${custId} AND prodId=${prodid} LIMIT ${quantity};`;
    const dbresult = await dbSql.execute(query);
    return dbresult[0];
};

const getlastVAlue = async () => {
    try {
        const query = `SELECT ordNo FROM order_tbl ORDER BY ordId DESC  LIMIT 1;`
        const dbresult = await dbSql.execute(query);
        return dbresult[0][0];
    } catch (error) {
        console.log("error in model", error);
    }
}

const insertdata = async (orderNo, cartId, prodId, amount, quant, createdAt) => {
    // console.log(emptyStr,orderNo, cartId, prodId, price, quant, createdAt);
    console.log("in model");
    console.log("orderNo,cartId,prodId,price,quant,createdAt", orderNo, cartId, prodId, amount, quant, createdAt);
    try {
        const insertQuery = "INSERT INTO order_Tbl(`ordNo`,`cardId`,`prodId`,`price`,`quantity`,`createdDate`) VALUES (?,?,?,?,?,?)";
        //  quant = Number(quant);
        let values = [orderNo, cartId, prodId, amount, quant, createdAt];
        const dbresult = await dbSql.execute(insertQuery, values);
        return dbresult;
        // for (let i = 0; i<quantity; i++) {
        //     values.push([emptyStr,cartId,prodId,price, quant, createdAt]);
        // }
        // return await dbSql.query(insertQuery, [values], function (err) {
        //     if (err) throw err;
        //     dbSql.end();
        // }); 
    } catch (error) {
        console.log("error in model", error);
    }
}

const updateData = async (cartId) => {
    try {
        const updateQuery = `UPDATE cart
SET isOrder = ${1}
WHERE cartId= ${cartId};
`
        const dbresult = await dbSql.execute(updateQuery);
        return dbresult;
    } catch (error) {
        console.log("error in model", error);
    }
}

const viewOrderNo = async (custId) => {
    try {
        // const query = `SELECT DISTINCT ordNo
        // FROM order_tbl where  ;`;
        const query = `SELECT  DISTINCT OT.ordNo FROM order_tbl OT  join cart c  on OT.cardId = c.cartId where custId =${custId};`
        const dbresult = await dbSql.execute(query);
        return dbresult[0];
    } catch (error) {
        console.log("error in model", error);
    }
}


const viewOrderNoDetails = async (orderNo) => {
    console.log("ordernumber", orderNo);
    try {
        const query = `SELECT ecom.prodId,ecom.ordNo,sum(ecom.price) as price,sum(ecom.quantity) as totalQty, p.prodImages
      FROM ecommerce.order_tbl ecom 
      join products p on p.proID=ecom.prodId
      where ecom.ordNo='${orderNo}' group by ecom.prodId;`;

        //     const query = ` SELECT 
        //        subquery.prodId,
        //        SUM(subquery.price) AS total_price,
        //        SUM(subquery.quantity) AS total_quantity,
        //        (
        //            SELECT p.prodImages
        //            FROM order_tbl ot
        //            JOIN cart c ON c.cartId = ot.cardId
        //            JOIN products p ON p.proID = c.prodId
        //            WHERE ot.prodId = subquery.prodId
        //            AND ot.ordNo = '${orderNo}'
        //            LIMIT 1
        //        ) AS prodImages
        //    FROM 
        //        (SELECT prodId, price, quantity
        //         FROM order_tbl
        //         WHERE ordNo = ${orderNo}) AS subquery
        //    GROUP BY 
        //        subquery.prodId;`;

        const dbresult = await dbSql.execute(query);
        return dbresult[0];
    } catch (error) {
        console.log("error in model", error);
    }
}


// SELECT p.prodImages 
// FROM order_tbl ot 
// JOIN cart c ON c.cartId = ot.cardId 
// JOIN products p ON p.proID = c.prodId 
// WHERE ot.prodId = 16 AND ot.ordNo='OR-000001'
// LIMIT 1;


// const insertdata = async (uniqueCode, cartid, proid, price, quantity, createdAt) => {
//     try {
//         const insertQuery = `INSERT INTO order_Tbl(ordNo,cardId,prodId,price,quantity,createdDate) VALUES ?`;
//         let values = [];
//         for (let i = 0; i<quantity; i++) {
//             values.push([uniqueCode, cartid, proid, price, 1, createdAt]);
//         }
//         return await dbSql.query(insertQuery, [values], function (err) {
//             if (err) throw err;
//             dbSql.end();
//         }); 
//     } catch (error){
//         console.log("error",error);
//     }
// }

module.exports = { getData, insertdata, updateData, getlastVAlue, viewOrderNo, viewOrderNoDetails };


// SELECT OT.ordNo, c.custId
// FROM order_tbl OT
// JOIN cart c ON c.cartId = OT.cardId
// WHERE c.custId = 20
// AND OT.ordNo = (
//     SELECT MAX(ordNo)
//     FROM order_tbl
//     WHERE custId = c.custId
//     GROUP BY custId
// );

