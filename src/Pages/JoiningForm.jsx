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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CardMedia, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ButtonLoader from '../Common/ButtonLoader';
import { fetchServiceDetails } from '../Redux/ServiceDetailSlice';
import { fetchBooking } from '../Redux/BookingSlice';
import { fetchViewBooking } from '../Redux/ViewBookingSlice';

const defaultTheme = createTheme();

const JoiningForm = () => {
    const dispatch = useDispatch()
    const { serviceDetailsData } = useSelector((state) => state?.servicedetails)
    const { loading } = useSelector((state) => state?.booking)
    const navigate = useNavigate()

    const { id } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const name = user.name
    const email = user.email
    const memberId = user._id
    const serviceName = serviceDetailsData?.service_name
    const [scheme, setScheme] = useState()
    const [price, setPrice] = useState('0')
    const serviceId = id

    const {
        register,
        handleSubmit,
        watch
    } = useForm()

    const onSubmitBooking = () => {
        dispatch(fetchBooking({ name, email, scheme, price, serviceId, memberId }))
        // dispatch(fetchViewBooking(memberId))
        navigate('/services')
    }

    useEffect(() => {
        if (serviceId) {
            switch (scheme) {
                case "Yearly":
                    setPrice("18000");
                    break;
                case "Half-yearly":
                    setPrice("9000");
                    break;
                case "Quarterly":
                    setPrice("4500");
                    break;
                default:
                    setPrice("0")
            }
        }
    }, [scheme, price]);

    useEffect(() => {
        dispatch(fetchServiceDetails(id))
    }, [id])

    console.log(watch(['name', 'email', 'scheme', 'price', 'serviceId', 'memberId']));

    return (
        <>

            <Layout>
                <Container >
                    <Grid container spacing={2} className='joiningform_custom'>
                        <Grid item xs={12} md={6} className='joiningform_img'>
                            <Typography variant='h4' className='jForm_heading'>
                                Connect With Us <br />
                                To Achieve <br />
                                Ultimate Fitness Goal
                            </Typography>
                            <CardMedia
                                component='img'
                                image={`${process.env.REACT_APP_BASE_URL}${serviceDetailsData?.image}`}
                                height='auto'
                            />
                            <Typography variant='h6' className='img_underline'>
                                Start your {serviceDetailsData?.service_name} journey now
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <ThemeProvider theme={defaultTheme}>
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline />
                                    <Box
                                        sx={{

                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'left',

                                        }}
                                    >

                                        <Typography component="h1" variant="h4" className='jForm_rightside_heading'>
                                            Join your Service today
                                        </Typography>
                                        <Box component="form"
                                            onSubmit={handleSubmit(onSubmitBooking)}
                                            noValidate
                                            sx={{
                                                mt: 1,
                                            }}>

                                            <input
                                                type='hidden'
                                                value={memberId}
                                                {...register("memberId")}
                                            />

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                value={name}
                                                inputProps={{ readOnly: true }}
                                                {...register("name")}

                                            />


                                            <TextField
                                                margin="normal"

                                                fullWidth
                                                id="email"
                                                value={email}
                                                inputProps={{ readOnly: true }}
                                                {...register("email")}

                                            />

                                            <input
                                                type='hidden'
                                                value={serviceId}
                                                {...register("serviceId")}
                                            />


                                            <TextField
                                                margin="normal"

                                                fullWidth
                                                value={serviceName}
                                                inputProps={{ readOnly: true }}
                                                {...register("serviceName")}

                                            />


                                            <FormControl required fullWidth>
                                                <InputLabel id="demo-simple-select-required-label">Select Your Scheme</InputLabel>
                                                <Select

                                                    value={scheme}
                                                    label="Select Your Scheme"
                                                    id='scheme'
                                                    name='scheme'
                                                    // {...register("scheme")}
                                                    onChange={(e) => setScheme(e.target.value)}

                                                >

                                                    <MenuItem value="Yearly">Yearly</MenuItem>
                                                    <MenuItem value="Half-yearly">Half-yearly</MenuItem>
                                                    <MenuItem value="Quarterly">Quarterly</MenuItem>
                                                </Select>

                                            </FormControl>


                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name='price'
                                                id='price'
                                                value={price}
                                                // {...register('price')}

                                            />




                                            <Button
                                                type="submit"
                                                fullWidth
                                                sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(255,77,0)' }}
                                                className='reg_button_custom'
                                            >
                                                {loading ? <ButtonLoader /> : <>Book Now</>}


                                            </Button>
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

export default JoiningForm
