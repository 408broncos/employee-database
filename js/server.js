const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ihatetrop1!',
  database: 'employee_db'
});

module.exports = connection;