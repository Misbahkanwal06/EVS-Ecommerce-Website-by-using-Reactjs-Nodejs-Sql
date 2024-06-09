import * as dotenv from "dotenv";
dotenv.config;


const firebaseConfig = {
    apiKey: "AIzaSyDdLEZMADpkpm4epFLrxwFCJpxgYg5sx8w",
    authDomain: "images-87f4e.firebaseapp.com",
    projectId: "images-87f4e",
    storageBucket: "images-87f4e.appspot.com",
    messagingSenderId: "252383913503",
    appId: "1:252383913503:web:97103eafcdf0c80cbdd72a",
    measurementId: "G-QGHZ05BKSH"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  