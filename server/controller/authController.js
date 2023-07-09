const userModel = require("../model/userSchema");
const validator=require('validator');
const bcrypt=require('bcrypt')


// *****************************************signup********************************************

const signup=async (req,res,next)=>{
    const {name,email,password,cpassword}=req.body;

    if(password !== cpassword){
        return res.status(400).json({
            success:false,
            message:"password and confirm password must be same"
        })
    }
    const validEmail = validator.isEmail(email);
    if(!validEmail){
        return res.status(200).json({
            success:true,
            message:'Please Enter a valid email'
        })
    }
    if(!name || !email || !password || !cpassword){
        return res.status(400).json({
            success:false,
            message:'Please provide all Data'
        })
    }
    try{
        const userInfo=userModel(req.body);
        const result=await userInfo.save();
        return res.status(200).json({
            success:true,
            data:{result}
        })
    }catch(err){
        if(err.code===11000){
            return res.status(400).json({
                success:false,
                message:'Email Already Exists'
            })
        }
        return res.status(400).json({
            success:false,
            message:err.message
        })
    }
    
}



// *****************************************signin********************************************

const signin=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:'Please provide all Data'
        })
    }
    try{
        const user=await userModel.findOne({email}).select('+password')
        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(400).json({
                success:false,
                message:'Please provide Valid Data'
            })
        }
        const token=user.jwtToken();
        user.password=undefined;
        user.cpassword=undefined;
        const cookieOption={
            maxAge:24*60*60*1000,
            httpOnly:true
        };
        res.cookie("token",token,cookieOption);
        return res.status(200).json({
            success:true,
            data:user
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    } 
}

// *****************************************userinfo********************************************

const getUser=async (req,res,next)=>{
    const userId=req.user.id;
    try{
        const user= await userModel.findById(userId);
        return res.status(200).json({
            success:true,
            data:user
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

// *****************************************logout********************************************

const logout=(req,res,next)=>{
    try{
        const cookieOption={
            expires:new Date(),
            httpOnly:true
        }
        res.cookie('token',null,cookieOption);
        return res.status(200).json({
            success:true,
            message:"logged out"
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

module.exports={
    signup,
    signin,
    getUser,
    logout
}