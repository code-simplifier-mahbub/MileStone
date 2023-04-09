import React from 'react';
import './Header.css';
import img from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className='header-container'>
            <img src={img} alt="" />
            <div className="nav-item">
                <li><a href="/order">Order</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </div>
        </div>
    );
};

export default Header;