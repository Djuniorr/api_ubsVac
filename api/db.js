import mysql from "mysql2";

export const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost', // Substitua por 'localhost' para desenvolvimento local
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "login",
    port: process.env.MYSQLPORT

})

export const ubs_db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost', // Substitua por 'localhost' para desenvolvimento local
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "ubs",
    port: process.env.MYSQLPORT
})