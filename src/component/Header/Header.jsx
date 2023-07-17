import React from 'react';
import logo from '../../images/Logo.svg'
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="menu">
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;