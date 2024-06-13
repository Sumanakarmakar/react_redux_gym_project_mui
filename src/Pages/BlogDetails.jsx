import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBlogdetails } from '../Redux/BlogDetailSlice'
import Layout from '../Common/Layout'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, List, Skeleton, Typography } from '@mui/material'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { fetchBlogs } from '../Redux/BlogSlice'

const BlogDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { blogdata } = useSelector((state) => state?.blogs)
    const { blogdetaildata } = useSelector((state) => state?.blogdetails)

    //for breadcrumbs
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
        dispatch(fetchBlogdetails(id))
        dispatch(fetchBlogs())
    }, [id])
    console.log('blogs', blogdata);

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
                            Blog Details
                        </Typography>

                        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Link to='/'>
                                <StyledBreadcrumb

                                    component="a"
                                    label="Home"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                            </Link>
                            <StyledBreadcrumb component="a" href="#" label="blog details" />

                        </Breadcrumbs>

                    </Box>

                </Box>

                {/* Page content */}
                <Container className='content_container'>
                    <Box className="heading_custom">
                        <Typography variant='body1' className='body1_custom'>Blog Details</Typography>
                        <Typography variant='h4'>Stay healthy and fresh always</Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={8} data-aos='fade-up'>
                                <Card>
                                    <CardActionArea>

                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={`${process.env.REACT_APP_BASE_URL}${blogdetaildata?.image}`}
                                            alt="blog image"
                                        />

                                        <CardContent className='blogdetail_content'>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {blogdetaildata?.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {blogdetaildata?.subtitle}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {blogdetaildata?.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4} data-aos='fade-left'>
                                <Box >

                                    <List className='recentblog_heading'>
                                        Recent Blogs
                                    </List>

                                    <ImageList sx={{ height: 850, display: "block" }}>

                                        {blogdata?.map((item) => (
                                            <ImageListItem >

                                                <img
                                                    srcSet={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                                    src={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />

                                                <ImageListItemBar
                                                    title={item.title}
                                                    actionIcon={
                                                        <Link to={`/blogdetails/${item._id}`}>
                                                            <IconButton
                                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                                aria-label={`info about ${item.title}`}
                                                            >
                                                                <InfoIcon />
                                                            </IconButton>
                                                        </Link>
                                                    }
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                    <Link to='/blogs'>
                        <Button className='blogBtn'>
                            <ArrowBackIosNewOutlinedIcon />
                            Back to Blogs Page
                        </Button>
                    </Link>
                </Container>
            </Layout>

        </>
    )
}

export default BlogDetails