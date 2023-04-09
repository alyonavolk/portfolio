import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import { ROUTES } from '../../../resources/ROUTES';

interface IHeader {
    menu: boolean | undefined;
    setMenu: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Header: React.FC<IHeader> = ({menu, setMenu}) => {

    return (
        <div className='header'>
            <div className='header__logo'>
                <div>
                    <NavLink className='header__link' to={ROUTES.main}>
                Volkova</NavLink>
                </div>
            </div>
            <div className={`header__menu ${menu ? 'header__menu_active' : ''}`} onClick={() => setMenu(!menu)}>
                <span></span>
            </div>
            <nav className={`header__nav ${menu ? 'header__nav_active' : ''}`}>
                <ul className='header__links'>
                    <li>
                        <NavLink className={(isActive) => isActive ? "active" : ""} to={ROUTES.about}>Обо мне</NavLink>
                    </li>
                    <li>
                        <NavLink className={(isActive) => isActive ? "active" : ""} to={ROUTES.skills}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className={(isActive) => isActive ? "active" : ""} to={ROUTES.project}>Проекты</NavLink>
                    </li>
                    <li>
                        <NavLink className={(isActive) => isActive ? "active" : ""} to={ROUTES.contacts}>Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;