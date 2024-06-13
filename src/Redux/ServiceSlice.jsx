import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchServices = createAsyncThunk('service/fetch', async () => {
    const response = await axiosInstance.get('getservice')
    const serviceData = response?.data?.data
    return serviceData
})

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        servicedata: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state, action) => {
                state.status = 'Loading'
                state.loading = true
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.servicedata = action.payload
                state.status = 'Fulfilled'
                state.loading = false
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})