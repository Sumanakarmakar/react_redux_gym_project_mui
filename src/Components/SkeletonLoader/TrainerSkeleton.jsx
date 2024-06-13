import { Card, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'

const TrainerSkeleton = () => {
    return (
        <>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    [1, 2, 3, 4, 5].map((index) => {
                        return (

                            <Grid item key={index} xs={2} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardMedia>
                                        <Skeleton animation='wave' height={600} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <Skeleton animation='wave' />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color="text.secondary">
                                            <Skeleton animation='wave' />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color="text.secondary">
                                            <Skeleton animation='wave' />
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>

                        )
                    })
                }
            </Grid>

        </>
    )
}

export default TrainerSkeleton