import express from "express"
import dotenv from "dotenv"
import mongoose, { connect } from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser";

import tourRoute from './routes/tour.js'
import userRoute from './routes/users.js'
import authRouter from './routes/auth.js'
import reviewRouter from "./routes/reviews.js"
import bookingRouter from  './routes/bookings.js'

dotenv.config();
const app=express();
const port=process.env.PORT || 4000;
const corsOption={
    origin:true,
    Credential:true
}


// for testing 

// app.get('/',(req,res)=>{
//     res.send("api is working");
// })



// Database connection
const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected")

    } catch (err) {
       
        console.log(err,"Mongodb connection failed")
        
    }
}



// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use('/api/v1/tours',tourRoute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/booking',bookingRouter)



app.listen(port,()=>{
    connection();
    console.log("server is running on ",port);
})