import './skillsItem.scss';

const skillsItem = ({img, title}) => {
    return (
        <li className='skills__item'>
            <img src={img} alt='' />
            <p className='item__descr'>
                {title}
            </p>
        </li>
    );
};

export default skillsItem;