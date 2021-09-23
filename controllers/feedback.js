const Review = require('../models/review')

const renderReviewPage = async(req,res) =>{
    try{
        res.render('feedback')
    }catch(err){
        console.log(err)
    }
}

const submitReview = async(req,res) => {
    try{
        const newReview = new Review(req.body)
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            console.log("Please enter the fields.")
        }else{
            Review.create(newReview,function(err,result){
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

module.exports = {renderReviewPage,submitReview}