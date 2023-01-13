import './projects.scss';
import ProjectItem from '../subComponents/projectItem/projectItem';

import scrumTable from '../../resource/img/scrum-table.png';
import woodtech from '../../resource/img/woodtech.png';
import healthcare from '../../resource/img/healthcare.png';
import blog from '../../resource/img/blog.png';
import shlomo from '../../resource/img/shlomo.png';
import cloverly from '../../resource/img/cloverly.png';

const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='projects__title'>Проекты</h2>
            <p className='projects__descr'>
                Estes são alguns dos trabalhos e  projetos que já realizei
            </p>
            <ul className='projects__items'>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://github.com/alyonavolk/scrum-table'}>
                    <ProjectItem img={scrumTable} link=''
                    size='small' color='dark' text='scrum-table' />
                </li>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://github.com/alyonavolk/healthcare'}>
                    <ProjectItem img={healthcare} link='' 
                    size='high' color='grey' text='healthcare' />
                </li>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://alyonavolk.github.io/shlomo/'}>
                    <ProjectItem img={shlomo} link='' 
                    size='small' color='light' text='shlomo' />
                </li>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://alyonavolk.github.io/woodtech/'}>
                    <ProjectItem img={woodtech} link='' 
                    size='high' color='light' text='woodtech' />
                </li>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://alyonavolk.github.io/blog-olympiad/'}>
                    <ProjectItem img={blog} link='alyonavolk.github.io/blog-olympiad/' 
                    size='small' color='dark' text='blog' />
                </li>
                <li className='projects__item'
                onClick={() => window.location.href = 'https://github.com/alyonavolk/cloverly'}>
                    <ProjectItem img={cloverly} link='' 
                    size='high' color='grey' text='cloverly' />
                </li>
            </ul>
        </div>
    );
};

export default Projects;