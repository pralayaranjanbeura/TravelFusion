import { query } from 'express';
import Tour from '../models/Tour.js'


// create new tour 

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const saveTour = await newTour.save();

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: saveTour
            })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to create try again!" })

    }
};

// update tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully updated",
                data: updatedTour
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
// getAll tour
export const getAllTour = async (req, res) => {

    //  for pagination
    const page = parseInt(req.query.page);


    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfuul",
            data: tours
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
// getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully fetched",
                data: tour
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
// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id, {
            $set: req.body
        }, { new: true })

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully deleted",
                data: deletedTour
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

// get tour by search 
export const getTourBySearch = async (req,res) => {

    // here i means case sensetivie
    const city =  new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {

        // gte means greater then equal
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews');
        res.status(200).json({
            success: true,
            message: "Successfuul",
            data: tours
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





// getfeatured tour
export const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours
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


// get tour count

export const getTourCount=async(req,res)=>{
   try {
    const tourCount=await Tour.estimatedDocumentCount();
    res.status(200).json({
        success:true,
        data:tourCount,
    })
    
   } catch (error) {
    res.status(404).json({
        success:true,
        message:"Failed to fetch"
    })
   }
}