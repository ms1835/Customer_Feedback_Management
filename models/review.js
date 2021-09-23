const conn = require('../config/db')

const Review = function(review){
    this.name = review.name;
    this.email = review.email;
    this.message = review.message;
}

Review.create = function(newReview,result){
    conn.query("insert into review set ?",newReview,function(err,res){
        if(err){
            console.log(err)
            result(err,null)
        }else{
            console.log(res.insertId)
            result(null,res.insertId)
        }
    }) 
}

Review.findAll = function(result){
    conn.query("select * from review",function(err,res){
        if(err){
            console.log(err)
            result(null,err)
        }else{
            console.log(res)
            result(null,res)
        }
    })
}


module.exports = Review