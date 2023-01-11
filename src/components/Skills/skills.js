import './skills.scss';
import SkillsItem from '../subComponents/skillsItem/skillsItem';

const Skills = () => {
    const skill = [ {id: 1, name: 'React'}, {id: 2, name: 'React'},
    {id: 3, name: 'React'}, {id: 4, name: 'React'},{id: 5, name: 'React'},
    {id: 6, name: 'React'},{id: 7, name: 'React'}, {id: 8, name: 'React'}, {id: 9, name: 'React'}, {id: 10, name: 'React'} ];

    return (
        <div className='skills'>
            <h2 className='skills__title'>
                Hard <span>Skills</span>
            </h2>
            <div className='skills__content'>
                <ul className='skills__items'>
                    {skill.map((val) => <SkillsItem id={val.id} img='' title={val.name} />)}
                </ul>
                <p className='skills__descr'>
                    My name is Matheus Amauri de Jesus Campos 
                    My name is Matheus Amauri de Jesus Campos 
                    My name is Matheus Amauri de Jesus Campos 
                </p>
            </div>
        </div>
    );
};

export default Skills;