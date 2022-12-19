import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                Volkova
            </div>
            <ul className='header__links'>
                <NavLink className='header__link' activeClassName='header__link_active' exact to='/'>Обо мне</NavLink>
                <NavLink className='header__link' activeClassName='header__link_active' exact to='/1'>Skills</NavLink>
                <NavLink className='header__link' activeClassName='header__link_active' exact to='/2'>Проекты</NavLink>
                <NavLink className='header__link' activeClassName='header__link_active' exact to='/3'>Контакты</NavLink>
            </ul>
        </div>
    );
};

export default Header;