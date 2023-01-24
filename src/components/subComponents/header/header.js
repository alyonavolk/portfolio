import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = ({menu, setMenu}) => {

    return (
        <div className='header'>
            <div className='header__logo'>
                <div>
                    <NavLink className='header__link' activeClassName='header__link_active' exact to='/'>
                Volkova</NavLink>
                </div>
            </div>
            <div className={`header__menu ${menu ? 'header__menu_active' : ''}`} onClick={() => setMenu(!menu)}>
                <span></span>
            </div>
            <nav className={`header__nav ${menu ? 'header__nav_active' : ''}`}>
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
            </nav>
        </div>
    );
};

export default Header;