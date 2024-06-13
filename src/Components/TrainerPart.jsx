import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrainer } from '../Redux/TrainerSlice'
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import TrainerSkeleton from './SkeletonLoader/TrainerSkeleton'

const TrainerPart = () => {
    const dispatch = useDispatch()
    const { trainerdata, loading } = useSelector((state) => state?.trainer)

    useEffect(() => {
        dispatch(fetchTrainer())
    }, [])
    // console.log('tt', trainerdata);

    return (
        <>

            <Container className='content_container'>
                <Box className="heading_custom">
                    <Typography variant='body1' className='body1_custom'>The Team</Typography>
                    <Typography variant='h4'>Meet Our Expert Trainers</Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {!loading ? (
                        trainerdata?.map((item) => {
                            return (

                                <Grid item xs={2} sm={4} md={4}>
                                    <Card sx={{ maxWidth: 345 }}>

                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                            alt="trainer image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Expert in : {item.speciality}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Experience : {item.experience}
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>

                            )
                        })
                    ) : (
                        <><TrainerSkeleton /></>
                    )
                    }
                </Grid>
            </Container>


        </>
    )
}

export default TrainerPart