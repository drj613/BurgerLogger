var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 8080,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
    });

connection.connect(function(err) {
    if (err) {
      console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
  });
  
  
  module.exports = connection;