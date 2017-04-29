var mysql = require("mysql");

var connection = mysql.createConnection({
    host: " otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: " so6s2ykuazm4p8of",
    password: " k7jx03r8r0mynxxu",
    database: "burgers_db",
    port: 3306
});

// var connection = mysql.createConnection(process.env.JAWSDB_URL);
// connection.connect();
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// if(process.env.JAWSDB_URL){

// }else {

// }


module.exports = connection;

