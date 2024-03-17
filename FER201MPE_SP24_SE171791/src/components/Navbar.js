import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const buttonStyle = {
        marginRight: '20px', // Adjust the margin as needed
    };

    return (
        <AppBar position='static'>

            <Toolbar>


                <Button color='inherit' component={Link} to="/">Home</Button>
                <Button color='inherit' component={Link} to="/dashboard" style={buttonStyle}>Dashboard</Button>
                <Button color='inherit' component={Link} to="/contact" style={buttonStyle}>Contact</Button>




            </Toolbar>


        </AppBar>
    );
};

export default Navbar;