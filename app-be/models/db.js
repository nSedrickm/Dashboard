const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// connection to DB
const connection = mysql.createConnection({
  host:dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

//open connection
connection.connect(error => {
  console.log("Connection to __DEKU__ successfull");
});

module.exports = connection;
