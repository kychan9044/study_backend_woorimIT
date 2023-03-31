const mysql = require("mysql");

const db = mysql.createConnection({
    host: "database-smart-odering.cwbhoq2czxgf.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "root1234",
    database: "login",
});

db.connect();

module.exports = db;