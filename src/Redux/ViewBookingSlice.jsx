import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";
import { toast } from "react-toastify";


export const fetchViewBooking = createAsyncThunk('booking/fetch', async (id) => {
    try {
        const response = await axiosInstance.get(`viewBooking/${id}`)
        const viewBookData = response?.data
        return viewBookData
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
    }
})

export const viewBookingSlice = createSlice({
    name: 'view_booking',
    initialState: {
        bookingdata: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchViewBooking.pending, (state, { payload }) => {
                state.status = 'Loading'
                state.loading = true
            })
            .addCase(fetchViewBooking.fulfilled, (state, { payload }) => {
                state.loading = false
                // console.log("jgeuegvfjh",payload);
                if (payload?.status === 200) {
                    // console.log("200jkbjb",payload);
                    state.status = 'Fulfilled'
                    
                    state.bookingdata = payload?.result
                }
            })
            .addCase(fetchViewBooking.rejected, (state, { payload }) => {
                state.loading=false
                state.status = 'Rejected'
            })
    }
})