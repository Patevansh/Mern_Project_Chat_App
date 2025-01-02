import jwt from 'jsonwebtoken'
import dotenv from "dotenv";


const createTokenAndSaveCookie=(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_TOKEN,{});
    res.cookie("jwt",token,{
        httponly:true,
        secure:true,
        sameSite:"strict",
    })
}

export default createTokenAndSaveCookie;