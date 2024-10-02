import mysql from "mysql2";

export const db = mysql.createConnection({
    host: process.env.MYSQL_HOST, // Use a variável de ambiente do Railway
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "login",
    port: process.env.MYSQL_PORT || 3306, // Use a porta correta
});

export const ubs_db = mysql.createConnection({
    host: process.env.MYSQL_HOST, // Use a variável de ambiente do Railway
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "ubs",
    port: process.env.MYSQL_PORT || 3306, // Use a porta correta
});

console.log('Host:', process.env.MYSQL_HOST);
console.log('User:', process.env.MYSQL_USER);
console.log('Password:', process.env.MYSQL_PASSWORD);
console.log('Port:', process.env.MYSQL_PORT);
