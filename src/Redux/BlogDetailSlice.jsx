import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchBlogdetails = createAsyncThunk('blogdetails/fetch', async (id) => {
    try {
        const response = await axiosInstance.get(`getblogdetails/${id}`)
        const detailData = response?.data?.data
        return detailData
    } catch (error) {
        console.log(error);
    }
})

export const blogDetailSlice = createSlice({
    name: 'blog_detail',
    initialState: {
        blogdetaildata: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogdetails.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(fetchBlogdetails.fulfilled, (state, action) => {
                state.blogdetaildata = action.payload
                state.status = 'Fulfilled'
            })
            .addCase(fetchBlogdetails.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})