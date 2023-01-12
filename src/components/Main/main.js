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
                    <button className='main__btn icon-Git' 
                    onClick={() => window.location.href = 'https://github.com/alyonavolk'}  target='_blank'>
                    </button>
                </li>
                <li className='main__link'>
                    <button className='main__btn icon-telegram' 
                    onClick={() => window.location.href = 'https://t.me/die_cookies'}  target='_blank'>
                    </button>
                </li>
                <li className='main__link'>
                    <button className='main__btn icon-vk' 
                    onClick={() => window.location.href = 'https://vk.com/al.volkova20'}  target='_blank'>
                    </button>
                </li>
                <li className='main__link'>
                    <button className='main__btn icon-ds' 
                    onClick={() => window.location.href = 'https://discordapp.com/users/717265325967540284'}  target='_blank'>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Main;