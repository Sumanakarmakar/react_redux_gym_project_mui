import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchTestimonial = createAsyncThunk('testimonial/fetch', async () => {
    try {
        const response = await axiosInstance.get('gettestimonial')
        const testimonialData = response?.data?.data
        return testimonialData
    } catch (error) {
        console.log(error);
    }
})

export const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: {
        testimonialdata: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonial.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(fetchTestimonial.fulfilled, (state, action) => {
                state.testimonialdata = action.payload
                state.status = 'Fulfilled'
            })
            .addCase(fetchTestimonial.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})