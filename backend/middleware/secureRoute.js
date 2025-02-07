import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("Token:", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    console.log("Verified Token:", verified);
    if (!verified) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const user = User.findById(verified.userid).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(501).json({ message: "Internal server error" });
  }
};

export default secureRoute;
