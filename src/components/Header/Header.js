import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderH2 } from '../UI/Heading/Heading';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

function Header({ countCart, fav }) {
    const c1 = useSelector(state => state.counter)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const cart = useSelector(state => state.cart)

    const cartCount = cart.cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(cartCount);

    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>

                    <div className="d-none d-lg-flex social-links align-items-center">
                        {/* 
                        <FavoriteBorderIcon favorite={favorite} /> */}

                        <Link to={"/FavoriteCart"}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={fav.length} color="secondary">
                                    <FavoriteIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        {/* <IconButton aria-label="cart">
                            <StyledBadge badgeContent={c1.countCart} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton> */}

                        <Link to="/AddToCart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cartCount} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>

                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>

                </div>


            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <HeaderH2 className="logo-tiny-text me-auto">Multispeciality Hospital</HeaderH2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>

                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/Departments">Departments</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/Doctors">Doctors</NavLink></li>

                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/Counter">Counter</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/Medicine">Medicine</NavLink></li>

                            <li><NavLink className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} to="/About">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/Contact">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink className={({ isActive }) => isActive ? "appointment-btn scrollto active" : "appointment-btn scrollto"} to="/Appointment"><span className="d-none d-md-inline">Make an</span>
                        Appointment</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "appointment-btn scrollto active" : "appointment-btn scrollto"} to="/Auth">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                </div>
            </header >
        </div >
    );
}

export default Header;