import express from "express"
import { createTour,deleteTour,getAllTour,getFeaturedTour,getSingleTour,getTourBySearch,getTourCount,updateTour } from "../controller/tourController.js"
const router=express.Router()


import { verifyAdmin } from "../utils/verifyToken.js";

// create new tour
router.post('/',verifyAdmin,createTour);


// update new tour
router.put('/:id',verifyAdmin,updateTour);

// delete new tour
router.delete('/:id',verifyAdmin,deleteTour);

// getSingle new tour
router.get('/:id',getSingleTour);

// getAll new tour
router.get('/',getAllTour);

// get  tour by search

router.get('/search/getTourBySearch',getTourBySearch);


router.get('/search/getFeaturedTour',getFeaturedTour);

router.get('/search/getTourCount',getTourCount);






export default router
