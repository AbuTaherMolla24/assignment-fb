import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Typography align="center" component="div">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, porro.</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum fugit dolores id quis laboriosam.</h4>
                </Typography>
            </Container>
        </div>
    );
};

export default Footer;