const mysql = require('mysql2')

// sudo mysql -u root -p
const conn = mysql.createConnection({
    // host: process.env.RDS_HOSTNAME,
    // user: process.env.RDS_USERNAME,
    // password: process.env.RDS_PASSWORD,
    // port: process.env.RDS_PORT
    host: 'test.c6g7qbxtdthw.us-east-1.rds.amazonaws.com',
    user: 'mayank',
    password: 'abcdefgh',
    port: 3306,
    database: 'testdb'
})

conn.connect(function(err){
    if(err){
        return console.log(err)
    }
    console.log("Connected to mysql server.")
    var sql = "CREATE TABLE if not exists users (email varchar(50) PRIMARY KEY, password VARCHAR(50), access varchar(10));";
    conn.query(sql,function(err,result){
        if(err)
            return console.log(err)
        console.log('Users table created')
    })
    var sql2 = "CREATE TABLE if not exists review (email varchar(50) PRIMARY KEY, name VARCHAR(50), message varchar(100));";
    conn.query(sql2,function(err,result){
        if(err)
            return console.log(err)
        console.log('Review table created')
    })
})

module.exports = conn