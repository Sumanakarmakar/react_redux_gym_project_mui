import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../Api/ApiUrl'

export const fetchBanner = createAsyncThunk('banner/fetch', async () => {
    try {
        const response = await axiosInstance.get('getbanner')
        const bannerData = response?.data?.data
        // console.log(bannerData);
        return bannerData
    } catch (error) {
        console.log(error);
    }
})

export const bannerSlice = createSlice({
    name: 'banner',
    initialState: {
        bannerdata: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanner.pending, (state, action) => {
                state.status = 'Loading...'
                state.loading=true
            })
            .addCase(fetchBanner.fulfilled, (state, action) => {
                state.bannerdata = action.payload
                state.status = 'Fulfilled'
                state.loading=false
            })
            .addCase(fetchBanner.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})