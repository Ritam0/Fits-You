const JWT=require('jsonwebtoken');
const userModel = require('../model/userSchema');

const jwtAuth= (req,res,next)=>{
    const token=(req.cookies && req.cookies.token) || null;
    if(!token){
        return res.status(400).json({
            success:false,
            message:'Please log in to get the data'
        })
    }
    try{
        const payload=JWT.verify(token,process.env.SECRET);
        const rootUser= {id:payload.id,email:payload.email};
        req.rootUser=rootUser;
        req.token=token;
        req.userId=rootUser._id;
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    next()
}
module.exports=jwtAuth;