




const bcrypt = require('bcrypt');
const saltRounds = 10;


const createHash = async (myPlaintextPassword) => {
    const hashPass = await bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log("hashpass", hashPass);
    return hashPass;
}

const comparePass = async (password, hash) => {
    const comparedpass = await bcrypt.compareSync(password, hash);
    return comparedpass;
}


// const  random = (currentValue)=>{
//     // if(!number)return;
//     if(currentValue) return "OR_0001";
//     console.log("empty",currentValue);
//     // return currentValue;
//     const numericPart = currentValue ? parseInt(currentValue.split('_')[1]) : 0;
//     const nextNumericPart = numericPart + 1;
//     const nextValue = 'OR_' + ('000' + nextNumericPart).slice(-4);
//     currentValue = nextValue; 
//     console.log("nextValue:", nextValue);
//     return nextValue;
// }


const random = (currentValue) => {
    console.log(" here current value ", currentValue);
    if (!currentValue) return 'OR-000001';
    else {
        const numericPart = parseInt(currentValue.split('-')[1]);
        const nextNumericPart = numericPart + 1;
        const nextValue = 'OR-' + ('000000' + nextNumericPart).slice(-6);
        console.log("nextValue:", nextValue);
        return nextValue;
    }
}

// let emptyStr = "OR-000001";
// emptyStr = random(emptyStr); 
// emptyStr = random(emptyStr);

const handleResponse = (
    statusCode = 500,
    send = "Internal Server error",
    obj,
    // arr,
    // validate,
) => {
    // console.log("obj",obj);
    return {
        statusCode: statusCode,
        send: send,
        obj: obj,
        // arr:arr
        // validate:validate
    }
}
module.exports = { createHash, comparePass, handleResponse, random };




// const  generateUniqueCode = async (prefix) =>{
//     const randomNumber = Math.floor(1000 + Math.random() * 90000);
//     let code = `${prefix}_${randomNumber}`
//     console.log("code",code);
//     return code;
//       // const prefix = "OR_";
//     // const timestamp = Date.now();
//     // const uniqueCode = prefix + timestamp;
//     // return uniqueCode;
// }
