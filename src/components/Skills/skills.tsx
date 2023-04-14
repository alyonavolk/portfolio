import './skills.scss';
import SkillsItem from '../subComponents/skillsItem/skillsItem';
import skill from '../../resources/skills.json';

const Skills = () => {
    return (
        <div className='skills'>
            <h2 className='skills__title'>
                Hard <span>Skills</span>
            </h2>
            <div className='skills__content'>
                <p className='skills__descr'>
                     Сбоку представлены мои основные навыки, которые позволяют мне создавать качественные веб-сайты и приложения.
                </p>
                <ul className='skills__items'>
                    {skill.map((val) => <SkillsItem key={val.id} img={val.img} title={val.name} />)}
                </ul>
            </div>
        </div>
    );
};

export default Skills;