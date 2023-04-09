import './projects.scss';
import ProjectItem from '../subComponents/projectItem/projectItem';

import scrumTable from '../../resources/img/scrum-table.png';
import woodtech from '../../resources/img/woodtech.png';
import healthcare from '../../resources/img/healthcare.png';
import blog from '../../resources/img/blog.png';
import shlomo from '../../resources/img/shlomo.png';
import cloverly from '../../resources/img/cloverly.png';

const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='projects__title'>Проекты</h2>
            <p className='projects__descr'>
                Estes são alguns dos trabalhos e  projetos que já realizei
            </p>
            <ul className='projects__items'>
                <li className='projects__item'>
                    <ProjectItem img={scrumTable} link='https://github.com/alyonavolk/scrum-table'
                    size='small' color='dark' text='scrum-table' />
                </li>
                <li className='projects__item'>
                    <ProjectItem img={healthcare} link='https://github.com/alyonavolk/healthcare' 
                    size='high' color='grey' text='healthcare' />
                </li>
                <li className='projects__item'>
                    <ProjectItem img={shlomo} link='https://alyonavolk.github.io/shlomo/' 
                    size='small' color='light' text='shlomo' />
                </li>
                <li className='projects__item'>
                    <ProjectItem img={woodtech} link='https://alyonavolk.github.io/woodtech/' 
                    size='high' color='light' text='woodtech' />
                </li>
                <li className='projects__item'>
                    <ProjectItem img={blog} link='https://alyonavolk.github.io/blog-olympiad/' 
                    size='small' color='dark' text='blog' />
                </li>
                <li className='projects__item'>
                    <ProjectItem img={cloverly} link='https://github.com/alyonavolk/cloverly' 
                    size='high' color='grey' text='cloverly' />
                </li>
            </ul>
        </div>
    );
};

export default Projects;