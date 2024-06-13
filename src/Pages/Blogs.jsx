import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Common/Layout'
import { fetchBlogs } from '../Redux/BlogSlice'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const Blogs = () => {

    const dispatch = useDispatch()
    const { blogdata } = useSelector((state) => state?.blogs)
    const dataPerLoad=4
    const [loadData, setLoadData] = useState(dataPerLoad)

    //for loading more data
    const getLoadData = () => {
        setLoadData(loadData + dataPerLoad)
    }

    // for page header
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
        dispatch(fetchBlogs())
    }, [])
    // console.log('blogtest', blogdata);

    return (
        <>

            <Layout>
                {/* Page header */}
                <Box>

                    <CardMedia
                        component='img'
                        image='/Image/blogimg.jpg'
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
                            Our Blogs
                        </Typography>

                        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Link to='/'>
                                <StyledBreadcrumb

                                    component="a"
                                    label="Home"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                            </Link>
                            <StyledBreadcrumb component="a" href="#" label="Blogs" />

                        </Breadcrumbs>

                    </Box>

                </Box>

                {/* Page content */}
                <Container className='content_container'>
                    <Box className="heading_custom">
                        <Typography variant='body1' className='body1_custom'>Our Blogs</Typography>
                        <Typography variant='h4'>Take a Glance of Our Blogs</Typography>
                    </Box>

                    {
                        blogdata?.slice(0, loadData).map((item) => {
                            return (
                                <Card className='blog_card' elevation={10} data-aos="fade-up">
                                    <Grid container >
                                        <Grid xs={12} sm={7}>

                                            <CardContent className='blog_content'>
                                                <Typography component="div" variant="h5">
                                                    {item.title}
                                                </Typography>

                                                <Link to={`/blogdetails/${item._id}`}>
                                                    <Button size="small" className='serviceBtn_custom'>
                                                        Read More
                                                    </Button>
                                                </Link>

                                            </CardContent>

                                        </Grid>
                                        <Grid xs={12} sm={5}>

                                            <CardMedia
                                                component='img'
                                                image={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                                alt='blog image'
                                                height='100%'
                                                sx={{ backgroundColor: 'black' }}
                                            />

                                        </Grid>
                                    </Grid>
                                </Card>
                            )
                        })
                    }
                    <Box sx={{textAlign: 'center'}}>
                        {loadData < blogdata.length ?
                            <><Button className='seermore_btn' onClick={getLoadData}>See More...</Button></>
                            :
                            <></>
                        }
                        
                        
                    </Box>
                </Container>

            </Layout>

        </>
    )
}

export default Blogs