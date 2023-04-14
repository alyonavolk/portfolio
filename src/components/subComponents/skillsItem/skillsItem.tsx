import React from 'react';
import './skillsItem.scss';

interface ISkillsItem {
    img: string;
    title: string;
}


const skillsItem: React.FC<ISkillsItem> = ({img, title}) => {
    return (
        <li className={`skills__item icon-${img}`}>
            {title}
        </li>
    );
};

export default skillsItem;