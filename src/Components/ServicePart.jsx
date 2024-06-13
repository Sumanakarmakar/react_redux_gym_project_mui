import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from '../Redux/ServiceSlice'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ServiceSkeleton from './SkeletonLoader/ServiceSkeleton'

const ServicePart = () => {
    const dispatch = useDispatch()
    const { servicedata, loading } = useSelector((state) => state?.service)

    useEffect(() => {
        dispatch(fetchServices())
    }, [])
    
    // console.log('ss', servicedata);


    return (
        <>

            <Container className='content_container'>
                <Box className="heading_custom">
                    <Typography variant='body1' className='body1_custom'>Our Services</Typography>
                    <Typography variant='h4'>We provide best gym services as follows</Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {!loading ? (
                        servicedata?.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="100%"
                                                image={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                                alt="service image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.service_name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.service_description.slice(0, 200)}...
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link to={`/servicedetails/${item._id}`}>
                                                <Button size="small" className='serviceBtn_custom'>
                                                    Explore
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>


                            )
                        })
                    ) : (
                        <ServiceSkeleton />
                    )
                    }
                </Grid>
            </Container>

        </>
    )
}

export default ServicePart