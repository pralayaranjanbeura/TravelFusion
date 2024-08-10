import { query } from 'express';
import User from '../models/User.js'


// create new User 

export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const saveUser = await newUser.save();

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: saveUser
            })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to create try again!" })

    }
};

// update User
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully updated",
                data: updatedUser
            })

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "failed to update",

            })

    }
}
// getAll User
export const getAllUser = async (req, res) => {

    //  for pagination
    


    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "Successfuul",
            data: users
        })

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: "not found",

            })

    }



}
// getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id)

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully fetched",
                data: user
            })

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: "not found",

            })
    }
}
// delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id, {
            $set: req.body
        }, { new: true })

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully deleted",
                data: deletedUser
            })

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "failed to delete",

            })

    }
}