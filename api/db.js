import mysql from "mysql";

export const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",  // O host pode ser definido pela variável de ambiente
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME_LOGIN || "login"
})

export const ubs_db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME_UBS || "ubs"
})