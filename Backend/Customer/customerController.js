



const dbSql = require("../dbs");
const { createHash, comparePass, handleResponse } = require('../utils');
// const jwt = require("jsonwebtoken");
const { createToken, tokenVerification } = require('../Security/jwtToken');

const createCustomer = async (req, res) => {
    console.log(req.body);
    try {
        const { fname, lname, email, password, gender } = req.body;
        const encryptedPass = password && await createHash(password)
        if (!encryptedPass) throw (`Pwd encryption failed`)
        // return encryptedPass;
        // if (encryptedPass) {
        // console.log("hjagsgaghs");
        // ,`cstType`,`createdAt`,`updatedAt`
        let custype = "buyer";
        let createdAt = new Date();
        const query = "INSERT INTO customer(`fName`,`lName`,`email`,`password`,`gender`,`cstType`,`createdat`)VALUES(?,?,?,?,?,?,?)";
        const values = [fname, lname, email, encryptedPass, gender, custype, createdAt];
        // ,custype, createdat, updatedat
        const dbresult = await dbSql.execute(query, values);
        // return dbresult;
        res.send(handleResponse(201, "Customer registered successfully", dbresult));
        // }
    } catch (error) {
        console.log(error)
        res.send(handleResponse(500, "Error in creating Customer accountS"))
    }
}


const loginCustomer = async (req, res) => {
    console.log("req.body", req.body);
    const { email, password } = req.body;
    try {
        const query = "SELECT * FROM customer WHERE email = ? ";
        const values = [email];
        const [dbresult] = await dbSql.execute(query, values);
        console.log("dbresult", dbresult);
        if (dbresult.length === 0) {
            res.send(handleResponse(401, "User not found"));
            // return res.status(400).json({ error: 'User not found' });
        }
        const user = dbresult[0];
        console.log("user", user);
        // return user;
        const bcryptRes = await comparePass(password, user.password)
        console.log(bcryptRes);
        // return bcryptRes;
        if (!bcryptRes) {
            res.send(handleResponse("Invalid Password"));
        } else {

            const token = await createToken(user);
            console.log("token", token);
            if (token) {
                const updateQuery = "UPDATE customer SET token = ? WHERE cstId = ?";
                const updateValues = [token, user.cstId];
                const db = await dbSql.execute(updateQuery, updateValues);
            }
            res.send(handleResponse(200, "Successful login", user));
        }
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error logging in"));
    }
}


// const verifyToken = async (req, res) => {
//     console.log(req.headers);
//     const { auth } = req.headers;
//     console.log("auth", auth);
//     try {
//         let authResp = auth && await tokenVerification(auth);
//         console.log(authResp);
//         if (authResp.isValid) return authResp.message
//         else if (!authResp.isValid) throw authResp.message;
//     } catch (error) {
//         res.send(error);
//     }
// }
// module.exports = { stdCreate, stdLogin, verifyToken };

module.exports = { createCustomer, loginCustomer }













