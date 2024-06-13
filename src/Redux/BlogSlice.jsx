import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchBlogs = createAsyncThunk('blogs/fetch', async () => {
    try {
        const response = await axiosInstance.get('getblog')
        const blogData = response?.data?.data
        return blogData
    } catch (error) {
        console.log(error);
    }
})

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogdata: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.blogdata = action.payload
                state.status = 'Fulfilled'
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})