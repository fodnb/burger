var mysql = require("mysql");


 var connection = mysql.createConnection({
        host: 'localHost',
        user: 'root',
        password: 'Buddy#13',
        database: 'burgers_db',
        socketPath: '/var/run/mysqld/mysqld.sock'
    });

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;