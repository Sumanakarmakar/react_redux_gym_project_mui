import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'

const ServiceSkeleton = () => {
    return (
        <>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    [1, 2, 3, 4, 5, 6].map((index) => {
                        return (

                            <Grid item key={index} xs={2} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia>
                                            <Skeleton height={300} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <Skeleton variant='h3' />
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <Skeleton variant='body2' />
                                            </Typography>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Button size="small" >
                                            <Skeleton height={60} width={150} />
                                        </Button>

                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    })
                }
            </Grid>

        </>
    )
}

export default ServiceSkeleton