const dbSql = require("../dbs");

const insertProdData = async (name, price, createdat, updatedat) => {
    try {
        const query = "INSERT INTO products(`proName`,`price`,`createdAt`,`updatedAt`)VALUES(?,?,?,?)";
        const values = [name, price, createdat, updatedat];
        const dbresult = await dbSql.execute(query, values);
        return dbresult;
    } catch (error) {
        console.log("error in inserting products", error);
    }
}

const getProdData = async (id) => {
    try {
        const query = `Select * from products p JOIN product_category pc ON pc.proCatId = p.categoryId
        WHERE  categoryId = ${id} `
            ;
        const dbresult = await dbSql.execute(query);
        return dbresult;
    } catch (error) {
        console.log("error in getting products", error);

    }
}

module.exports = { insertProdData, getProdData };