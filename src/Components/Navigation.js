import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

// Array representing different pages in the application
const pages = ['Home', 'News', 'About', 'Contact'];

function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        toggle();
        // You can optionally update other styles based on the theme here
    };

    // State to handle the opening/closing of the mobile navigation menu
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    // Obtaining the navigation function from React Router
    const navigate = useNavigate();

    // Function to open the mobile navigation menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Function to close the mobile navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // Function to navigate to a specific page and close the menu
    const navigateToPage = (page) => {
        navigate(page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`);
        handleCloseNavMenu();
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo and title for larger screens */}
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* Mobile navigation button */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Mobile navigation menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* Mapping over pages to create menu items */}
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => navigateToPage(page)}>
                                    <Typography component={Link} to={page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Logo and title for smaller screens */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* Navigation buttons for larger screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigateToPage(page)}
                                sx={{ my: 2, color: theme.color, backgroundColor: theme.backgroundColor, display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Right-aligned button */}
                    <Button href='#' onClick={handleToggleTheme}
                        style={{
                            color: theme.color,
                            outline: 'none',
                            backgroundColor: theme.backgroundColor,
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
