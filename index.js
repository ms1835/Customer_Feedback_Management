const express = require('express')
const app = express()


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const landingRoutes = require('./router/user')
const authRoutes = require('./router/auth')
const feedbackRoutes = require('./router/feedback')
const serviceRoutes = require('./router/service')
app.get('/',landingRoutes)
app.use('/auth',authRoutes)
app.use('/add',feedbackRoutes)
app.use('/help',serviceRoutes)

// app.get('/',(req,res) => {
//     try{
//         res.render('landing')
//     }catch(err){
//         console.log(err)
//     }
// })

app.get('/feedback',(req,res) => {
    try{
        res.render('feedback')
    }catch(err){
        console.log(err)
    }
})

// app.get('/customerCare',(req,res) => {
//     try{
//         res.render('customerCare')
//     }catch(err){
//         console.log(err)
//     }
// })

Port = 8081

app.listen(Port, ()=>{
    console.log(`Connected to server at port: ${Port}`)
})