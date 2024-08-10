

import Booking from "../models/Booking.js"

export const createBooking=async(req,res)=>{
    const newBooking=new Booking(req.body);
    try {
        const  savedBooking=await newBooking.save();

        res.status(200).json({
            success:true,
            message:"Your tour is booked",
            data:savedBooking
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error",
    
        })
        
    }
}

// get single booking

export const getBooking=async(req,res)=>{
    const  id=req.body.id;
    try {
        const book=await Booking.findById(id);
        res.status(200).json({
            success:true,
            message:"Your tour is booked",
            data:savedBooking
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            data:book
    
        })
        
    }
}



// get all booking

export const getAllBooking=async(req,res)=>{
    
    try {
        const books=await Booking.find(id);
        res.status(200).json({
            success:true,
            message:"Your tour is booked",
            data:books
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error",
    
        })
        
    }
}