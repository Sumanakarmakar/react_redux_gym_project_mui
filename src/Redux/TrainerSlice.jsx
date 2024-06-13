import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/ApiUrl";


export const fetchTrainer = createAsyncThunk('trainer/fetch', async () => {
    try {
        const response = await axiosInstance.get('gettrainer')
        const trainerData = response?.data?.data
        return trainerData
    } catch (error) {
        console.log(error);
    }
})

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: {
        trainerdata: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainer.pending, (state, action) => {
                state.status = 'Loading'
                state.loading=true
            })
            .addCase(fetchTrainer.fulfilled, (state, action) => {
                state.trainerdata = action.payload
                state.status = 'Fulfilled'
                state.loading=false
            })
            .addCase(fetchTrainer.rejected, (state, action) => {
                state.status = 'Rejected'
            })
    }
})