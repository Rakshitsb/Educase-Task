import jwt from "jsonwebtoken";
import User from "../models/user.js";


export const protectRoute =async (req, res, next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(400)
                .json({
                    message: "Unauthorizd No token provided",
                })
        }

        const decoded = jwt.verify(token, process.env.JWT_SEC);
        if (!decoded) {
            return res.status(400)
                .json({
                    message: "Unauthorizd Invalid token",
                })
        }
        const user= await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
          }


        req.user = user;
        next();
    } catch (error) {
        console.log('Error in protect middle ware', error);
        return res.status(500)
            .json({
                message: "Internal Server error",
            })
    }
}