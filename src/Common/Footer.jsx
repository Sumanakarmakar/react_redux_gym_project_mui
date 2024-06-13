import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            <footer className='footer-section'>
                <Container>
                    <Box >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                            className='footer-cta'
                        >
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='single-cta' sx={{ display: 'flex' }}>
                                    <LocationOnIcon sx={{
                                        color: '#ff5e14',
                                        fontSize: '30px',
                                        float: 'left',
                                        marginTop: '20px'
                                    }} />

                                    <Box className='cta-text'>
                                        <Typography
                                            variant='h6' sx={{
                                                color: '#fff',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                marginBottom: '2px'
                                            }}>
                                            Find us
                                        </Typography>
                                        <Box sx={{ padding: "0px 30px 10px 0px" }}>
                                            <span>348 nowbhanga near RA play ground, Salt Lake, Sector IV, Kolkata</span>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='single-cta' sx={{ display: 'flex' }}>
                                    <PhoneEnabledIcon sx={{
                                        color: '#ff5e14',
                                        fontSize: '30px',
                                        float: 'left',
                                        marginTop: '20px'
                                    }} />

                                    <Box className='cta-text'>
                                        <Typography variant='h6' sx={{
                                            color: '#fff',
                                            fontSize: '20px',
                                            fontWeight: 600,
                                            marginBottom: '2px'
                                        }}>
                                            Call us
                                        </Typography>
                                        <span>+91-7980564203</span>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='single-cta' sx={{ display: 'flex' }}>
                                    <EmailIcon sx={{
                                        color: '#ff5e14',
                                        fontSize: '30px',
                                        float: 'left',
                                        marginTop: '20px'
                                    }} />

                                    <Box className='cta-text'>
                                        <Typography variant='h6' sx={{
                                            color: '#fff',
                                            fontSize: '20px',
                                            fontWeight: 600,
                                            marginBottom: '2px'
                                        }}>
                                            Mail us
                                        </Typography>
                                        <span>info.gym@cozyfit.in</span>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                            className='footer-cta'
                        >
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='single-cta'>

                                    <Box className='cta-text'>
                                        <Typography variant='h6' sx={{
                                            color: '#fff',
                                            fontSize: '40px',
                                            fontWeight: 600,
                                            marginBottom: '2px'
                                        }}>
                                            CozyFit
                                        </Typography>
                                        <Box sx={{ padding: "10px 20px 10px 0px" }}>
                                            <span >348 nowbhanga near RA play ground, Salt lake sector IV Kolkata, near Nowbhanga Post Office, Kolkata, West Bengal 700098</span>
                                        </Box>

                                    </Box>
                                    <Box>
                                        <Typography variant='h4' sx={{
                                            color: '#fff',
                                            fontSize: '25px',
                                            fontWeight: 600,
                                            marginBottom: '10px',
                                            ml: 2
                                        }}>
                                            Follow us
                                        </Typography>
                                        <FacebookOutlinedIcon sx={{ color: '#1C66CA', ml: 2 }} />
                                        <InstagramIcon sx={{ color: '#C21CCA', ml: 1 }} />
                                        <TwitterIcon sx={{ color: '#7ADD45', ml: 1 }} />
                                        <GoogleIcon sx={{ color: '#5B2CD8', ml: 1 }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: '#fff', ml: 2 }}>
                                            2024
                                            <CopyrightIcon sx={{ pt: 1 }} />
                                            All Rights Reserved
                                        </Typography>

                                    </Box>

                                </Box>
                            </Grid>
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='footer-widget'>
                                    <Box>
                                        <Typography variant='h4'>Useful Links</Typography>

                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6}>
                                                <List className='list-item'>
                                                    <Link className='link_footer' to='/'>
                                                        <ListItem disablePadding>
                                                            <ListItemText primary='Home' sx={{ marginTop: '18px' }} />
                                                        </ListItem>
                                                    </Link>

                                                    <Link className='link_footer' to='/services'>
                                                        <ListItem disablePadding>
                                                            <ListItemText primary='Services' />
                                                        </ListItem>
                                                    </Link>

                                                    <Link className='link_footer' to='/trainer'>
                                                        <ListItem disablePadding>
                                                            <ListItemText primary='Trainer' />
                                                        </ListItem>
                                                    </Link>

                                                </List>
                                            </Grid>
                                            <Grid item xs={6}>

                                                <List className='list-item'>
                                                    <Link className='link_footer' to='/blogs'>
                                                        <ListItem disablePadding>
                                                            <ListItemText primary='Blogs' sx={{ marginTop: '18px' }} />
                                                        </ListItem>
                                                    </Link>

                                                    <Link className='link_footer' to='/testimonial'>
                                                        <ListItem disablePadding>
                                                            <ListItemText primary='Testimonial' />
                                                        </ListItem>
                                                    </Link>

                                                </List>
                                            </Grid>
                                        </Grid>


                                        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                                            <Typography variant='h5' className='opening_hrs'>
                                                Opening Hours :
                                            </Typography>

                                        </Box>
                                        <Typography variant='body2' className='opening_hrs_list'>
                                            Monday-Friday : 8 AM-8 PM <br/>
                                            Saturday-Sunday : 2 PM-10 PM
                                        </Typography>


                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={4} md={4}>
                                <Box className='footer-widget'>
                                    <Box>
                                        <Typography variant='h4'>Get in Touch</Typography>
                                    </Box>
                                    <Box sx={{ mt: 4 }}>
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.6455743267036!2d88.42724706951986!3d22.575153350446747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1716212865114!5m2!1sen!2sin" width="80%" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117979.25088524766!2d88.36218832065917!3d22.472210682903302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743131965b1b%3A0x9cd52e5a3a758b68!2sFitness%20Rockerzz%20AC%20GYM!5e0!3m2!1sen!2sin!4v1716243461280!5m2!1sen!2sin" width="80%" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>

            </footer>

        </>
    )
}

export default Footer