

const renderLoginPage = async(req,res) =>{
    try{
        res.render('landing')
    }catch(err){
        console.log(err)
    }
}



module.exports= {renderLoginPage}