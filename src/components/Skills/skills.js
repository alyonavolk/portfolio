import './skills.scss';
import SkillsItem from '../subComponents/skillsItem/skillsItem';
import skill from '../../resource/skills.json';

const Skills = () => {
    // const skill = [ {id: 1, img: '../../../public/img/cell.svg', name: 'React'}, {id: 2, img: '../../../public/img/cellIn.svg', name: 'React'},
    // {id: 3, img: '../../../public/img/cell.svg', name: 'React'}, {id: 4, img: '../../../public/img/cellIn.svg', name: 'React'},{id: 5, img: '../../../public/img/cell.svg', name: 'React'},
    // {id: 6, img: '../../../public/img/cellIn.svg', name: 'React'},{id: 7, img: '../../../public/img/cell.svg', name: 'React'}, {id: 8, img: '../../../public/img/cellIn.svg', name: 'React'}, {id: 9, img: '../../../public/img/cell.svg', name: 'React'}, {id: 10, img: '../../../public/img/cellIn.svg', name: 'React'} ];

    return (
        <div className='skills'>
            <h2 className='skills__title'>
                Hard <span>Skills</span>
            </h2>
            <div className='skills__content'>
                <ul className='skills__items'>
                    {skill.map((val) => <SkillsItem id={val.id} img={val.img} title={val.name} />)}
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