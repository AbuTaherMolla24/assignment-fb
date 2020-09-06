import React from 'react';
import { Container, Typography } from '@material-ui/core';
import logo from '../../image/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Typography align="center" component="div">
                    <h1><img width="30px" src={logo} alt=""/>  Assignment-FB</h1>
                </Typography>
            </Container>
        </div>
    );
};

export default Header;