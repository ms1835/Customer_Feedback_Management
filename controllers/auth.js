const User = require('../models/users')

const loginUser = async(req,res) => {
    try{
        const newUser = new User(req.body)
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            console.log("Please enter the fields.")
        }else{
            User.create(newUser,function(err,result){
                if(err){
                    console.log(err)
                }
                res.redirect('/feedback')
            })
        }
    }catch(err){
        console.log(err)
    }
}



module.exports = {loginUser}