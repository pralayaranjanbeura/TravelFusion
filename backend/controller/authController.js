

// import user from "../models/User.js"

// for verification
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const register = async (req, res) => {

    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);


    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.password
        })
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Successfully created"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed t create"
        })
    }
}

export const login = async (req, res) => {

    const email = req.body.email;
    try {

        const user = await User.findOne({ email });
        // if user doen not exist
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist"
            })
        }

        // if user exist then check the password 
        const checkPassword = await bcrypt.compare(req.body.password, user.password);

        // 
        if (!checkPassword) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Incorrect eamil and password"
                }
            )
        }

        const { password, role, ...rest } = user._doc

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,

            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        );

        // set token in the browser cookies and send the response tot he client

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            token,
            data: { ...rest },
            role,
        })




    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                success: false,
                message: "Failed to login"
            }
        )
    }
}