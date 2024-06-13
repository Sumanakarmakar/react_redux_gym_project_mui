import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Common/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login, regLogout } from '../Redux/AuthSlice';
import ButtonLoader from '../Common/ButtonLoader';

const defaultTheme = createTheme();

const Login = () => {
    const dispatch = useDispatch()
    const { redirectToDashboard } = useSelector((state) => state?.auth)
    const navigate = useNavigate()
    const [btnLoader,setBtnLoader]=useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmitLogin = (data) => {
        setBtnLoader(true)
        try {
            dispatch(login(data))
            
        } catch (error) {
            setBtnLoader(false)
            console.log(error);
        }

    }

    const reg = () => {
        dispatch(regLogout())
    }

    useEffect(() => {
        let token = localStorage.getItem("token")
        let isInLoginPage = window.location.pathname.toLowerCase() === '/login'
        if (token !== null && token !== undefined && token !== "") {
            isInLoginPage && navigate('/')
        }
    }, [redirectToDashboard])

    console.log(watch(['email', 'password']));

    return (
        <>

            <Layout>

                <ThemeProvider theme={defaultTheme}>
                    <Box className='login_box'>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    // marginTop: 11,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    pt: "100px"
                                }}
                            >

                                <Typography component="h1" variant="h3" sx={{ my: '50px' }}>
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit(onSubmitLogin)} 
                                noValidate 
                                className='loginform_custom'
                                >
                                    <TextField
                                    className='textfield'
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        type='email'
                                        label="Email Address"
                                        {...register("email", {
                                            required: true
                                        })}

                                    />
                                    {errors?.email?.type === 'required' && <p>**This field is Required**</p>}

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        {...register("password", {
                                            required: true
                                        })}

                                    />
                                    {errors?.password?.type === 'required' && <p>**This field is Required**</p>}


                                    <Button
                                        type="submit"
                                        fullWidth
                                        // variant="contained"
                                        sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(255,77,0)' }}
                                        className='button_custom'
                                    >
                                        {
                                            btnLoader?
                                            <ButtonLoader/>:<>Sign In</>
                                        }
                                        
                                    </Button>
                                    <Grid container>

                                        <Grid item sx={{ ml: 'auto' }}>
                                            <Link to="/registration" variant="body2" className='link_custom' onClick={reg}>
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </ThemeProvider>

            </Layout>

        </>
    )
}

export default Login