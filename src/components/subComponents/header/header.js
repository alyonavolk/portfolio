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
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/4'>Обо мне</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/1'>Skills</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/2'>Проекты</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/3'>Контакты</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;