import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchServiceDetails = createAsyncThunk('servicedetails/fetch', async (id) => {
    try {
        const response = await axiosInstance.get(`getservicedetails/${id}`)
        const sDetailData = response?.data?.data
        return sDetailData
    } catch (error) {
        console.log(error);
    }
})

export const serviceDetailSlice = createSlice({
    name: 'service_details',
    initialState: {
        serviceDetailsData: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServiceDetails.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(fetchServiceDetails.fulfilled, (state, action) => {
                state.serviceDetailsData = action.payload
                state.status = 'Fulfilled'
            })
            .addCase(fetchServiceDetails.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})