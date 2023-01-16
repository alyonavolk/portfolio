import './skillsItem.scss';

const skillsItem = ({img, title, id}) => {
    return (
        <li className='skills__item' id={id}>
            <img src={"../img/" + img} alt='' />
            <p className='item__descr'>
                {title}
            </p>
        </li>
    );
};

export default skillsItem;