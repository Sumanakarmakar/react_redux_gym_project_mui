import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registration } from '../Redux/AuthSlice';
import ButtonLoader from '../Common/ButtonLoader';

const defaultTheme = createTheme();


const Registration = () => {
    const dispatch = useDispatch()
    const { redirectToLogin } = useSelector((state) => state?.auth)
    const navigate = useNavigate()
    const [btnLoader, setBtnLoader]=useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const onSubmitRegister = (data) => {
        setBtnLoader(true)
        try {
            let formdata = new FormData()
            formdata.append("name", data.name)
            formdata.append("email", data.email)
            formdata.append("phone", data.phone)
            formdata.append("password", data.password)
            formdata.append("answer", data.answer)
            formdata.append("image", document.getElementById('image').files[0])
            dispatch(registration(formdata))

        } catch (error) {
            setBtnLoader(false)
            console.log(error);
        }
    }

    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("name")
            let isInLoginPage = window.location.pathname.toLowerCase() === '/registration'
            if (name !== null && name !== undefined && name !== "") {
                isInLoginPage && navigate('/login')
            }
        }
        redirectUser()
    }, [redirectToLogin])

    console.log(watch(['name', 'email', 'phone', 'password', 'answer', 'image']));

    return (
        <>

            <Layout>
                <Container >
                    <Grid container spacing={2} className='reg_custom'>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component='img'
                                image='/Image/regimg.jpg'
                                height='auto'
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <ThemeProvider theme={defaultTheme}>
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline />
                                    <Box
                                        sx={{
                                            // marginTop: 11,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',

                                        }}
                                    >

                                        <Typography component="h1" variant="h2" sx={{ my: '20px' }}>
                                            Sign Up
                                        </Typography>
                                        <Box component="form"
                                            onSubmit={handleSubmit(onSubmitRegister)}
                                            noValidate
                                            sx={{
                                                mt: 1,
                                            }}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                label="Your Name"
                                                {...register("name", {
                                                    required: true,
                                                    maxLength: 25
                                                })}

                                            />
                                            {errors?.name?.type === 'required' && <p>*This field is Required*</p>}
                                            {errors?.name?.type === 'maxLength' && <p>Name should not be exceeded 25 characters</p>}

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                type='email'
                                                {...register("email", {
                                                    required: true,
                                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                                })}

                                            />
                                            {errors?.email?.type === 'required' && <p>*This field is Required*</p>}
                                            {errors?.email?.type === 'pattern' && <p>Invalid email format</p>}

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                label="Phone No"
                                                {...register("phone", {
                                                    required: true,
                                                    maxLength: 10
                                                })}

                                            />
                                            {errors?.phone?.type === 'required' && <p>*This field is Required*</p>}
                                            {errors?.phone?.type === 'maxLength' && <p>Phone No. should not be exceeded 10 characters</p>}

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                label="Password"
                                                type="password"
                                                id="password"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6
                                                })}

                                            />
                                            {errors?.password?.type === 'required' && <p>*This field is Required*</p>}
                                            {errors?.password?.type === 'minLength' && <p>Minimum password length is 6</p>}

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                label="Answer"
                                                {...register("answer", {
                                                    required: true
                                                })}

                                            />
                                            {errors?.answer?.type === 'required' && <p>*This field is Required*</p>}

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                type='file'
                                                id='image'
                                                {...register("image", {
                                                    required: true
                                                })}

                                            />
                                            {errors?.image?.type === 'required' && <p>Please select a photo</p>}

                                            <Button
                                                type="submit"
                                                fullWidth
                                                // variant="contained"
                                                sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(255,77,0)' }}
                                                className='reg_button_custom'
                                            >
                                                {
                                                    btnLoader?
                                                    <><ButtonLoader/></> : <>Sign Up</>
                                                }
                                                
                                            </Button>
                                            <Grid container justifyContent="flex-end">
                                                <Grid item>
                                                    <Link to="/login" variant="body2">
                                                        Already have an account? Sign in
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Container>
                            </ThemeProvider>

                        </Grid>
                    </Grid>

                </Container>


            </Layout>

        </>
    )
}

export default Registration