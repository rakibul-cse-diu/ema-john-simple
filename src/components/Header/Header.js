import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-container'>
            <nav>
                <img src={logo} alt="logo" />
                <div className="nav-options">
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;