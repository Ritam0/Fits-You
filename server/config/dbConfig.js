const mongoose=require('mongoose');
require ('dotenv').config();

const MONGO_URL=process.env.MONGO_URL || " ";
const databaseConnect=()=>{
    mongoose
    .connect(MONGO_URL)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log('error in databaseConnect'));
}
module.exports=databaseConnect;