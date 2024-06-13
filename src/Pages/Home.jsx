import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import Carousel from 'react-material-ui-carousel-custom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanner } from '../Redux/BannerSlice'
import { Box, CardMedia, Typography } from '@mui/material'
import ServicePart from '../Components/ServicePart'
import TrainerPart from '../Components/TrainerPart'
import TestimonialPart from '../Components/TestimonialPart'
import PageLoader from '../Common/PageLoader'


const Home = () => {
    const dispatch = useDispatch()
    const { bannerdata, loading } = useSelector((state) => state?.banner)

    useEffect(() => {
        dispatch(fetchBanner())

    }, [])

    // console.log('bb',bannerdata);

    if (loading){
        return <PageLoader/>
    }

    return (
        <>
            
            <Layout>

                <Carousel autoPlay={false}>
                    {
                        bannerdata?.map((item) => {
                            return (
                                <Box>

                                    <CardMedia
                                        component='img'
                                        image={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                        height='800vh'
                                        sx={{ objectFit: 'fit' }}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)',
                                        // textAlign: 'center',
                                        maxWidth: '70%',
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.1)',
                                        padding: '30px',
                                        borderRadius: '10px'
                                    }} >
                                        <Typography variant='h5'>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='h2'>
                                            {item.subtitle}
                                        </Typography>
                                    </Box>

                                </Box>
                            )
                        })
                    }
                </Carousel>


                {/* Service part */}
                <ServicePart />

                {/* Trainer part */}
                <TrainerPart />

                {/* Testimonial part */}
                <TestimonialPart />

            </Layout>

        </>
    )
}

export default Home