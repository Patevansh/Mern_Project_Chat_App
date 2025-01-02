import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createTokenAndSaveCookie from '../jwt/generateToken.js'
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser){
        createTokenAndSaveCookie(newUser._id,res);
        res.status(201).json({ message: "User registered successfully" ,newUser});

    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login=async(req,res)=>{
  const {email,password}=req.body;
  try {
    
    const user=await User.findOne({email});
    const ismatch=await bcrypt.compare(password,user.password);
    if(!user || !ismatch){
      res.status(404).json({message:"Invalid user or password"});
    }
    createTokenAndSaveCookie(user._id,res);
    res.status(201).json({message:"User logged in successfully ",user:{
      _id:user._id,
      name:user.name,
      email:user.email
    }})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout=async (req,res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({message:"User logged out"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server error"});
  }
};
