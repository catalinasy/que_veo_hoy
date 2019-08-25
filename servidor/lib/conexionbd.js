var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'usuario',
  password : 'Acamica2319',
  database : 'que_veo_hoy'
});

module.exports = connection;

