import './skillsItem.scss';

const skillsItem = ({img, title}) => {
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