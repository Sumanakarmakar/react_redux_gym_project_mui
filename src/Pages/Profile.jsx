import { Avatar, Box, Card, CardMedia, Container, Divider, Grid, Pagination, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchViewBooking } from '../Redux/ViewBookingSlice';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const Profile = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    const dispatch = useDispatch()
    const { bookingdata } = useSelector((state) => state?.viewbooking)
    const id = user._id

    //for tabs
    const [value, setValue] = useState("1")
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }


    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


    useEffect(() => {
        dispatch(fetchViewBooking(id))
    }, [id])

    console.log("bookingdata", bookingdata);

    return (
        <>

            <Layout>
                {/* Page header */}
                <Box>

                    <CardMedia
                        component='img'
                        image='/Image/profilepage.jpg'
                        height='600px'
                        sx={{ objectFit: 'cover' }}
                    />
                    <Box className='page-header-text-box' sx={{
                        position: 'absolute',
                        top: '50%', // Adjust the vertical position as desired
                        left: '50%', // Adjust the horizontal position as desired
                        transform: 'translate(-50%,-50%)',

                        fontWeight: '700',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        padding: '20px',
                        width: '70%',
                    }}>
                        <Typography variant='h3' className='page-header-text' sx={{
                            color: '#FA4507',
                            fontFamily: 'Courier New',
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            fontSize: '80px'
                        }}>
                            Member Details
                        </Typography>

                        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Link to='/'>
                                <StyledBreadcrumb

                                    component="a"
                                    label="Home"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                            </Link>
                            <StyledBreadcrumb component="a" href="#" label="profile" />

                        </Breadcrumbs>

                    </Box>

                </Box>

                {/* Page content */}
                <Container>
                    <Box className='profile_box'>
                        <Card className='profile_card'>
                            <Grid container>
                                <Grid xs={12} sm={4} className='profile_avatar'>
                                    <Avatar alt="P" src='/Image/avatar.png' sx={{ height: '100px', width: '100px', margin: '30px auto' }} />
                                    <h4 style={{ textAlign: 'center', color: 'white' }}>{user?.name}</h4>
                                </Grid>
                                <Grid xs={12} sm={8} className='profile_info'>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider #ccc' }}>
                                            <TabList onChange={handleChange} textColor='secondary' indicatorColor='secondary'>
                                                <Tab label="Information" sx={{ color: 'white' }} value="1" />
                                                <Tab label="MyBookings" sx={{ color: 'white' }} value="2" />
                                            </TabList>
                                        </Box>

                                        <TabPanel value='1'>
                                            <Typography variant='h6'>
                                                Name : {user?.name}
                                            </Typography>
                                            <Typography variant='h6'>
                                                Email : {user?.email}
                                            </Typography>
                                            <Typography variant='h6'>
                                                Contact No. : {user?.phone}
                                            </Typography>
                                            <Typography variant='h6'>
                                                Answer : {user?.answer}
                                            </Typography>
                                            <Typography variant='h6'>
                                                MyBookings : {bookingdata?.length}
                                            </Typography>
                                        </TabPanel>


                                        <TabPanel value='2'>
                                            {
                                                bookingdata?.map((item) => {
                                                    return (
                                                        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                                                            <Grid item xs={6}>
                                                                <Typography variant='h6' className='booking_headings'>
                                                                    Training Name
                                                                </Typography>
                                                                <Typography variant='body2' className='booking_names'>
                                                                    {item?.serviceId?.service_name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Typography variant='h6' className='booking_headings'>
                                                                    Status
                                                                </Typography>
                                                                {
                                                                    item?.isPending ?
                                                                        <Typography variant='body2' className='booking_status'>
                                                                            Pending...<span>&#8987;</span>
                                                                        </Typography>
                                                                        :
                                                                        <Typography variant='body2'>
                                                                            Approved <span>&#9989;</span>
                                                                        </Typography>
                                                                }

                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })
                                            }

                                        </TabPanel>
                                    </TabContext>

                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Container>

            </Layout>


        </>
    )
}

export default Profile