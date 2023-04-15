import { NavLink } from 'react-router-dom';
import './main.scss';

const Main = () => {
    return (
        <div className='main'>
            <h1 className='main__title'>
                Привет, меня <br/>зовут Волкова Алёна!
            </h1>
                <p className='main__descr'>Frontend Developer</p>
            <ul className='main__links'>
                <li className='main__link'>
                    <NavLink className='main__btn icon-Git' 
                    to='https://github.com/alyonavolk' />
                </li>
                <li className='main__link'>
                    <NavLink className='main__btn icon-telegram' 
                    to='https://t.me/die_cookies' />
                </li>
                <li className='main__link'>
                    <NavLink className='main__btn icon-vk' 
                    to='https://vk.com/al.volkova20' />
                </li>
                <li className='main__link'>
                    <NavLink className='main__btn icon-ds' 
                    to='https://discordapp.com/users/751402235212070942' />
                </li>
            </ul>
        </div>
    );
};

export default Main;