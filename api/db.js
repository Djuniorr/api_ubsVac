import mysql from "mysql";

export const db = mysql.createConnection({
    host:MYSQLHOST,
    user:MYSQLUSER,
    password: MYSQLPASSWORD,
    database: "login"
})

export const ubs_db = mysql.createConnection({
    host: MYSQLHOST,
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: "ubs"
})