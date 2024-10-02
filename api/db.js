import mysql from "mysql2";
import dotenv from "dotenv";

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST, // Use a variável de ambiente do Railway
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: "login",
    port: process.env.MYSQLPORT || 3306, // Use a porta correta
});

export const ubs_db = mysql.createConnection({
    host: process.env.MYSQLHOST, // Use a variável de ambiente do Railway
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: "ubs",
    port: process.env.MYSQLPORT || 3306, // Use a porta correta
});

console.log('Host:', process.env.MYSQLHOST);
console.log('User:', process.env.MYSQLUSER);
console.log('Password:', process.env.MYSQLPASSWORD);
console.log('Port:', process.env.MYSQLPORT);
