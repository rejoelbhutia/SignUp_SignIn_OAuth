import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : process.env.MYSQL_PASSWORD,
    database : "OAuth_demo",
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
})

export default pool;