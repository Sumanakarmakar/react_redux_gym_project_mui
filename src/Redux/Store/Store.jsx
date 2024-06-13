import { configureStore } from "@reduxjs/toolkit";
import { bannerSlice } from "../BannerSlice";
import { AuthSlice } from "../AuthSlice";
import { serviceSlice } from "../ServiceSlice";
import { trainerSlice } from "../TrainerSlice";
import { testimonialSlice } from "../TestimonialSlice";
import { blogSlice } from "../BlogSlice";
import { blogDetailSlice } from "../BlogDetailSlice";
import { serviceDetailSlice } from "../ServiceDetailSlice";
import { viewBookingSlice } from "../ViewBookingSlice";
import { bookingSlice } from "../BookingSlice";


const Store=configureStore({
    reducer:{
        banner: bannerSlice.reducer,
        auth: AuthSlice.reducer,
        service: serviceSlice.reducer,
        trainer: trainerSlice.reducer,
        testimonial: testimonialSlice.reducer,
        blogs: blogSlice.reducer,
        blogdetails: blogDetailSlice.reducer,
        servicedetails: serviceDetailSlice.reducer,
        booking: bookingSlice.reducer,
        viewbooking: viewBookingSlice.reducer
        
    }
})

export default Store