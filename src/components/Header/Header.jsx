import React from 'react';
import './Header.css'
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;