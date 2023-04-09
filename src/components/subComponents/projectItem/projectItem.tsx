import React from 'react';
import './projectItem.scss';
import { NavLink } from 'react-router-dom';


interface IProjectItem {
    img: string;
    color: string;
    size: string;
    link: string;
    text: string;
}

const ProjectItem: React.FC<IProjectItem> = ({img, color, size, link, text}) => {
    return (
        <NavLink className='projectItem'
        to={link}>
            <img src={img} alt='' />
            <p className={`projectItem__name 
            projectItem__name_${color} projectItem__name_${size}`}>
                {text}
            </p>
        </NavLink>
    );
};

export default ProjectItem;