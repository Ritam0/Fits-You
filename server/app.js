const express=require('express');
const app=express();
const authRouter =require ('./router/authRouter')
const databaseConnect=require('./config/dbConfig')
const cookieparser=require('cookie-parser')


const path=require('path');

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});



databaseConnect();

app.use(express.json());
app.use(cookieparser());


app.use('/',authRouter);
app.use('/',(req,res)=>{
    return res.status(200).json({data:"My server"});
})






module.exports=app;