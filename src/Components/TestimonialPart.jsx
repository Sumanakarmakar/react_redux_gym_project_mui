import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestimonial } from '../Redux/TestimonialSlice'
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Slider from 'react-slick'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

const TestimonialPart = () => {
  const dispatch = useDispatch()
  const { testimonialdata } = useSelector((state) => state?.testimonial)

  //for slider part
  var settings = {
    dots: true,
    // infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  useEffect(() => {
    dispatch(fetchTestimonial())
  }, [])
  console.log('testdata', testimonialdata);

  return (
    <>

      <Container className='content_container'>
        <Box className="heading_custom">
          <Typography variant='body1' className='body1_custom'>Testimonial</Typography>
          <Typography variant='h4'>What Our Clients Say!</Typography>
        </Box>


        <Box sx={{ justifyContent: 'center', alignItems: 'center', mt: 5 }}>
          <div className="slider-container">
            <Slider {...settings}>
              {
                testimonialdata?.map((item) => {
                  return (
                    <Card sx={{
                      maxWidth: "100%", backgroundColor: "black ",
                      padding: "20px 0px"
                    }}>
                      <CardMedia
                        component="img"
                        alt="testimonial image"
                        sx={{
                          height: '100px', width: '100px',
                          borderRadius: '50%',
                          mx: 'auto',
                          border: "8px solid #ccc"
                        }}
                        image={`${process.env.REACT_APP_BASE_URL}${item.image}`}
                      />
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" component="div"
                          sx={{ color: "#FA4507", fontWeight: 700 }}
                        >
                          {item.client_name}
                        </Typography>
                        <Typography variant="body1" color="white">
                          " {item.review} "
                        </Typography>
                      </CardContent>

                    </Card>
                  )
                })
              }
            </Slider>
          </div>
        </Box>
      </Container>

    </>
  )
}

export default TestimonialPart