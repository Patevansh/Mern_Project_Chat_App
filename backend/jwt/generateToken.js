import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();
const createTokenAndSaveCookie=(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"2d",
    });
    res.cookie("jwt",token,{
        httponly:true,
        secure:true,
        sameSite:"strict",
    });
    return token;
}

export default createTokenAndSaveCookie;