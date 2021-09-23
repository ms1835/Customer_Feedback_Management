const Review = require('../models/review')

const renderServicePage = async(req,res) =>{
    try{
        res.render('customerCare')
    }catch(err){
        console.log(err)
    }
}


const displayReviews = async(req,res) =>{
    try{
        Review.findAll(function(err,review){
            // res.json({error:false,message:"Employee added successfully!",data:employee});
            if(err){
                console.log(err)
            }
            // res.send(review)
            res.render('customerCare',{review:review})
            // console.log("found anything")
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {renderServicePage,displayReviews}