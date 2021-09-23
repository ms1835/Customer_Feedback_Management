const conn = require('../config/db')

const User = function(user){
    this.email = user.email;
    this.password = user.password;
    this.access = user.access;
}

User.create = function(newUser,result){
    conn.query("insert into users set ?",newUser,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            console.log(res.insertId)
            result(null,res.insertId)
        }
    }) 
}

module.exports = User