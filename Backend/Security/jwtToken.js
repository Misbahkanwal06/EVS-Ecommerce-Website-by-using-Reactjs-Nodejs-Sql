

const jwt = require("jsonwebtoken");

const createToken = async (userObj) => {
    console.log("userOBJ", userObj);
    let token = jwt.sign({
        cstId:userObj.cstId,
        fname: userObj.fname,
        lname: userObj. lname,
        gender:userObj.gender,
        custype:userObj.custype,
        email: userObj.email,
        password: userObj.password,
        createdat : userObj.createdat,
        updatedat:userObj.updatedat
    }, 'shhhhh',
        // { expiresIn: '20' }
    );
    console.log("userOBJ token",token);
    return token;
}

// const tokenVerification = (auth) => {
//     console.log("auth", auth);
//     console.log("In token verification");
//     // if (!auth) return { isVal: false, msg: "No JWT token found" }
//         let verify = jwt.verify(auth, "shhhhh");
//         // console.log("verifications::",verify);
//         return verify;
//     try {
//         console.log("verify end");
//         return { isValid: true, message: "Token verifications successfull" }
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {createToken};

// , tokenVerification