const fs = require('fs');
const dbKey = fs.readFileSync('key/dbKey', 'utf-8');

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'fiveworks',
  password: dbKey,
  database: 'info',
  dateStrings: 'date',
  charset: 'utf8mb4'
})

conn.connect();
module.exports = conn;