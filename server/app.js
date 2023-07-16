const express=require('express');
const app=express();
const authRouter =require ('./router/authRouter')
const databaseConnect=require('./config/dbConfig')
const cookieparser=require('cookie-parser')




databaseConnect();

app.use(express.json());
app.use(cookieparser());


app.use('/',authRouter);
app.use('/',(req,res)=>{
    return res.status(200).json({data:"My server"});
})






module.exports=app;