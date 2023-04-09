import React from 'react';
import './skillsItem.scss';

interface ISkillsItem {
    img: string;
    title: string;
}


const skillsItem: React.FC<ISkillsItem> = ({img, title}) => {
    return (
        <li className='skills__item'>
            {/* <img src={"../img/" + img} alt='' /> */}
            <p className={`item__descr icon-${img}`}>
                {title}
            </p>
        </li>
    );
};

export default skillsItem;