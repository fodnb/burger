var mysql = require("mysql");

var PORT = process.env.PORT || 3306;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Buddy#13',
    database: 'burgers_db',
    port:  PORT

});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;
