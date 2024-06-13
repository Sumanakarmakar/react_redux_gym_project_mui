import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/ApiUrl"
import { toast } from "react-toastify"
import Swal from "sweetalert2"


const initialState = {
    Userdata: {},
    status: 'idle',
    LogoutToggle: false,
    redirectReg: null,
    redirectToLogin: null,
    redirectToDashboard: null
}

export const registration = createAsyncThunk("signup", async (data) => {
    const response = await axiosInstance.post('register', data, {})
    toast(response?.data?.message)
    return response
})

export const login = createAsyncThunk("signin", async (data) => {
    try {
        const response = await axiosInstance.post('login', data)
        return response
    } catch (error) {
        toast(error?.response?.data?.message)
    }
})

export const AuthSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        //logout
        logout: (state, { payload }) => {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem('user')
            state.LogoutToggle = false
        },
        //for redirect registration page after login logout
        regLogout: (state, { payload }) => {
            localStorage.removeItem('name')
        },
        //check_token
        check_token: (state, { payload }) => {
            let token = localStorage.getItem('token') || sessionStorage.getItem('token')
            if (token !== null && token !== undefined) {
                state.LogoutToggle = true
            }
        },
        //for login redirection
        redirectToLoginPage: (state, { payload }) => {
            state.redirectToLogin = payload
        },
        //for dashboard redirection
        redirectToHomePage: (state, { payload }) => {
            state.redirectToDashboard = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state, action) => {
                state.loading = true
            })
            .addCase(registration.fulfilled, (state, { payload }) => {
                if (payload?.data?.success === true) {
                    localStorage.setItem("name", payload?.data?.savedMember?.name)
                    state.redirectToLogin = '/login'
                    // toast(payload?.data?.message)
                    Swal.fire({
                        title: "Hello Member!",
                        text: "Please open your registered email and verify",
                        icon: "info",
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            })
            .addCase(registration.rejected, (state, action) => {
                state.loading = false
                toast("Email already exists!")
            })

            .addCase(login.pending, (state, action) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.status = 'idle'
                console.log(payload?.data);
                if (payload?.data?.status === 200) {
                    localStorage.setItem("token", payload?.data?.token)
                    localStorage.setItem("name", payload?.data?.data?.name)
                    localStorage.setItem("user", JSON.stringify(payload?.data?.data))
                    state.redirectToDashboard = '/'
                    state.LogoutToggle = true
                    // toast(payload?.data?.message)
                    Swal.fire({
                        title: "You are successfully Logged in",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.payload
                console.error('Login error', action.payload)
                toast("Wrong email or Password!")
            })
    }
})

export const { logout, regLogout, check_token, redirectToLoginPage, redirectToHomePage } = AuthSlice.actions