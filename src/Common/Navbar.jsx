import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Menu, MenuItem, Tooltip } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/AuthSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';

const drawerWidth = 240;

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dispatch = useDispatch()
    const { LogoutToggle } = useSelector((state) => state?.auth)
    const handleLogout = () => {
        dispatch(logout())
        toast("Successfully Logged Out")
    }

    let name = localStorage.getItem("name")

    //for appbar menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <Link to='/'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/services'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Services' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/trainer'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Trainer' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/blogs'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Blogs' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/testimonial'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Testimonial' />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
                <CssBaseline />
                <Box className='topbar-custom'>
                    <Grid container spacing={2} sx={{ pt: 4 }}>
                        <Grid xs={6} >
                            <Grid container spacing={2} >
                                <Grid xs={6} sx={{ display: 'flex' }}>
                                    <MailOutlinedIcon sx={{ color: 'rgb(255, 77, 0)', ml: 5 }} />
                                    <Typography sx={{ ml: 1, color: 'whitesmoke' }}>
                                        info.gym@cozyfit.in
                                    </Typography>
                                </Grid>
                                <Grid xs={6} sx={{ display: 'flex' }}>
                                    <LocalPhoneOutlinedIcon sx={{ color: 'rgb(255, 77, 0)' }} />
                                    <Typography sx={{ ml: 1, color: 'whitesmoke' }}>
                                        +91-7980564203
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid xs={6}>

                        </Grid>
                    </Grid>
                </Box>
                <AppBar component="nav" className='navbar-custom'>

                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            COZYFIT
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, paddingRight: '30px' }}>

                            <Link to='/'>
                                <Button sx={{ color: '#fff' }}>
                                    Home
                                </Button>
                            </Link>

                            <Link to='/services'>
                                <Button sx={{ color: '#fff' }}>
                                    Services
                                </Button>
                            </Link>

                            <Link to='/trainer'>
                                <Button sx={{ color: '#fff' }}>
                                    Trainer
                                </Button>
                            </Link>

                            <Link to='/blogs'>
                                <Button sx={{ color: '#fff' }}>
                                    Blogs
                                </Button>
                            </Link>


                            <Link to='/testimonial'>
                                <Button sx={{ color: '#fff' }}>
                                    Testimonial
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{
                            borderLeft: '1px solid #ccc',
                            paddingLeft: '30px'
                        }}>

                            {
                                LogoutToggle ?
                                    <>
                                        <Button sx={{
                                            color: '#fff',
                                            backgroundColor: 'rgb(255, 77, 0)', fontWeight: 600
                                        }}
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            {/* Log Out
                                                <LogoutIcon sx={{ marginLeft: '5px' }} /> */}
                                            Hi, {LogoutToggle ? name : ""}
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <Link className='link_custom' to='/profile'>
                                                <MenuItem className='text-uppercase' onClick={handleClose}>Profile</MenuItem>
                                            </Link>

                                            <Link className='link_custom' onClick={handleLogout}
                                                to='/login'>
                                                <MenuItem >
                                                    Log Out<LogoutIcon />
                                                </MenuItem>
                                            </Link>
                                        </Menu>
                                    </>
                                    :
                                    <>



                                        <Link to='/login'>
                                            <Button sx={{
                                                color: '#fff',
                                                backgroundColor: 'rgb(255, 77, 0)', fontWeight: 600
                                            }}>
                                                Log in
                                                <LoginIcon sx={{ marginLeft: '5px' }} />
                                            </Button>
                                        </Link>


                                    </>
                            }

                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>

        </>
    )
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar