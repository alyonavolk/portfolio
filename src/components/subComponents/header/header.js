import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/'>
                Volkova</NavLink>
                </li>
            </div>
            <ul className='header__links'>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/about'>Обо мне</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/project'>Проекты</NavLink>
                </li>
                <li>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/contacts'>Контакты</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;