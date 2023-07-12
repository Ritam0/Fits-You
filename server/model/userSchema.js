const mongoose=require('mongoose');
const { Schema } = require("mongoose");
const JWT=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        minLength:[5,'name must be atleast 5 character'],
        maxLength:[50,'name must be less than 50 character'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,'email already exists'],
        lowercase:true
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
})

//*********************Hash password and confirm password*******************
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
    return next();
})
userSchema.pre('save',async function(next){
    if(!this.isModified('cpassword')){
        return next();
    }
    this.cpassword=await bcrypt.hash(this.cpassword,10);
    return next();
})





//*********************JWT Method generation*******************

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}



const userModel=mongoose.model('user',userSchema);
module.exports=userModel;