

const dbSql = require("../dbs");

const insertIntoCat = async (procatId, catname, createdat, updatedat) => {
    try {
        const query = "INSERT INTO product_category(`proCatId`,`catName`,`createdAt`,`updatedAt`)VALUES(?,?,?,?)";
        const values = [procatId, catname, createdat, updatedat];
        const dbresult = await dbSql.execute(query, values);
        return dbresult;

    } catch (error) {
        console.log("error in model", error);
    }
}

const getCategoriesData = async () => {
    try {
        const query = `select * from product_category`;
        console.log("query", query);
        const dbresult = await dbSql.execute(query);
        return  dbresult;
    } catch (error) {
        console.log("error in model", error);
    }
}

module.exports = { insertIntoCat, getCategoriesData }