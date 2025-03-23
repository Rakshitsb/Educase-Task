import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const handleSingnup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400)
                .json({ message: 'user already exists' })
        }
        const newUser = new User({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201).json({
            message: 'signup sucess',
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        })

    } catch (error) {
        console.error("Error in signup controller:", error); // Log the actual error

        res.status(500).json({
            message: "Internal server error",
            error: error.message, // Return the error message in the response
            success: false,
        });
    }

}

export const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400)
                .json({ message: 'Invalid Credentials' })
        }
        //rehashing password
        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            return res.status(400)
                .json({ message: "Ivalid Password" });
        }

        //jwt token creation 
        const jwtToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SEC,
            { expiresIn: '24h' }
        )
        //send cookie
        res.cookie("jwt", jwtToken, {
            maxAge: 24 * 60 * 60 * 1000,//convert to millisec
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite: "strict", // CSRF attacks cross-site request forgery attacks
            secure: false,
        })

        res.status(201).json({
            message: 'Login sucess',
            _id: user._id,
            name: user.name,
            jwtToken,
        })

    } catch (error) {
        console.log('error in the login conroller', error);
        res.status(500)
            .json({
                message: "internal server error ",
                sucess: false
            });
    }
}



export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};