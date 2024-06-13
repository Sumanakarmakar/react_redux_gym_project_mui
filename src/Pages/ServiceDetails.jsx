import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceDetails } from '../Redux/ServiceDetailSlice';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ServiceDetails = () => {
    const dispatch = useDispatch()
    const { serviceDetailsData } = useSelector((state) => state?.servicedetails)
    const { id } = useParams()

    //for breadcrumb
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
        dispatch(fetchServiceDetails(id))
    }, [id])
    console.log('sdetaildata', serviceDetailsData);

    return (
        <>

            <Layout>
                {/* page header */}
                <Box>

                    <CardMedia
                        component='img'
                        image='/Image/serviceImg.jpg'
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
                            color: 'White',
                            fontFamily: 'Courier New',
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            fontSize: '80px'
                        }}>
                            Service Details
                        </Typography>

                        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Link to='/'>
                                <StyledBreadcrumb

                                    component="a"
                                    label="Home"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                            </Link>
                            <StyledBreadcrumb component="a" href="#" label="Service Details" />

                        </Breadcrumbs>

                    </Box>

                </Box>

                {/* page content */}
                <Container className='content_container'>
                    <Card className='servicecard_custom' elevation={10}>
                        <CardMedia
                            component="img"
                            image={`${process.env.REACT_APP_BASE_URL}${serviceDetailsData?.image}`}
                            alt="service image"
                            height="100%"

                        />
                        <CardContent className='servicecontent_custom'>
                            <Typography gutterBottom variant="h5" component="div">
                                {serviceDetailsData?.service_name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='desc_section'>
                                {serviceDetailsData?.service_description}
                            </Typography>
                            <Link to={`/joining/${serviceDetailsData?._id}`}>
                            <Button className='join_btn'>Join Now</Button>
                            </Link>
                        </CardContent>

                    </Card>
                    <Link to='/services'>
                        <Button className='serviceBtn_custom'>
                            <ArrowBackIosNewOutlinedIcon/>
                            Back to Service Page
                        </Button>
                    </Link>
                </Container>


            </Layout>

        </>
    )
}

export default ServiceDetails