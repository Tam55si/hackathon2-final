import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { NavLink } from 'react-router-dom';
import '../componets/styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} varient='h1' component='div' sx={{ flexGrow: 1 }}>

                <ContentPasteIcon />RESUMESTORE

            </Typography>
            <Divider />
            <ul className='mobile-navigation '>
                <li>
                    < NavLink activeClassName='active' to={'/'} >Home</ NavLink>
                </li>

                <li>
                    < NavLink activeClassName='active' to={'/about'}>About us</ NavLink>
                </li>
                <li>
                    < NavLink activeClassName='active' to={'/contact'}>Contact</ NavLink>
                </li>
            </ul>

        </Box>
    )

    return (
        <>
            <Box>
                <AppBar className='appbar' component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='Open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography color={'goldenrod'} varient='h1' component='div' sx={{ flexGrow: 1, textAlign: "initial" }}>

                            <ContentPasteIcon />
                            RESUMESTORE
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                                </li>

                                <li>
                                    <NavLink activeClassName='active' to={'/about'}>About us</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to={'/contact'}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer varient='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '220px' } }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>

            </Box>
        </>
    )
}

export default Header
