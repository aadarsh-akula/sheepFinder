const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "sheep",
    password: "finder",
    database: 'sheepfinder'
});

con.connect(function(err) { 
    if(err) throw err;
})