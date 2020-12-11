import React from 'react';
import './Header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img 
                    className='header__icon'
                    src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
                    alt='Airbnb Logo'
                />
            </Link>

            <div className='header__center'>
                <input type='text'  placeholder='Begin your search'/>
                <SearchRoundedIcon />
            </div>
            
            <div className='header__right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreRoundedIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header;
