import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";


const initialState = {
    bookingStatus: 'idle',
    loading: false
}

export const fetchBooking = createAsyncThunk('booking/fetch', async (data) => {
    try {
        const response = await axiosInstance.post("booking", data)
        const bookData = response?.data
        // console.log('hjevfhvrfv', bookData);
        toast.success("Congratulations! Your service is booked");
        return bookData
    } catch (error) {
        console.log('gftuft', error);
        toast.error(error?.response?.data?.message)
        
    }
})

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooking.pending, (state, { payload }) => {
                state.bookingStatus = "submitting"
                state.loading = true
            })
            .addCase(fetchBooking.fulfilled, (state, { payload }) => {
                state.bookingStatus = 'idle'
                state.loading = false
                console.log('jhrgfyhrb', payload);
            })
            .addCase(fetchBooking.rejected, (state, { payload }) => {
                state.loading=false
                state.bookingStatus = 'failed'
            })
    }
})