import React from 'react'
import Layout from '../Common/Layout'
import TrainerPart from '../Components/TrainerPart'
import { Box, CardMedia, Typography } from '@mui/material'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Trainer = () => {
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

    return (
        <>

            <Layout>

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
                            The Team
                        </Typography>

                        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Link to='/'>
                                <StyledBreadcrumb

                                    component="a"
                                    label="Home"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                            </Link>
                            <StyledBreadcrumb component="a" href="#" label="Trainer" />

                        </Breadcrumbs>

                    </Box>

                </Box>

                <TrainerPart />
            </Layout>

        </>
    )
}

export default Trainer