import './about.scss';

const About = () => {
    return (
        <div className='about'>
            <h2 className='about__title'>Обо мне</h2>
            <h3 className='about__title_grey'>Frontend Developer</h3>
            <p className='about__descr'>
                My name is Matheus Amauri de Jesus Campos 
                My name is Matheus Amauri de Jesus Campos 
                My name is Matheus Amauri de Jesus Campos 
            </p>
            <ul className='about__links'>
                <li className='about__link'>
                    <button className='link__btn' 
                    onClick={() => window.location.href = 'https://github.com/alyonavolk'}  target='_blank'>
                        <img src='' alt='dsd' />
                    </button>
                   <p className='link__title'>
                        GitHub
                   </p>
                   <p className='link__descr'>
                        Демонстрация моих работ
                   </p>
                </li>
                <li className='about__link'>
                    <button className='link__btn' 
                    onClick={() => window.location.href = 'https://t.me/die_cookies'}  target='_blank'>
                        <img src='' alt='dsd' />
                    </button>
                   <p className='link__title'>
                        Telegram
                   </p>
                   <p className='link__descr'>
                        Способ связаться со мной
                   </p>
                </li>
                <li className='about__link'>
                    <button className='link__btn' 
                    onClick={() => window.location.href = 'https://vk.com/al.volkova20'}  target='_blank'>
                        <img src='' alt='dsd' />
                    </button>
                   <p className='link__title'>
                        ВКонтаке
                   </p>
                   <p className='link__descr'>
                        Способ связаться со мной в переписке
                   </p>
                </li>
                <li className='about__link'>
                    <button className='link__btn' 
                    onClick={() => window.location.href = 'https://discordapp.com/users/717265325967540284'}  target='_blank'>
                        <img src='' alt='dsd' />
                    </button>
                   <p className='link__title'>
                        Discord
                   </p>
                   <p className='link__descr'>
                        Способ связаться со мной в голосовом чате
                   </p>
                </li>
            </ul>
        </div>
    );
};

export default About;