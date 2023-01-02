import './switcher.scss';

const Switcher = ({onClick, theme}) => {
    return (
        <button onClick={onClick} className={`switch ${theme ? 'switch_dark' : 'switch_light'}`}>
           <span className={`${theme ? 'switch_darkBG' : 'switch_lightBG'}`}></span>
       </button>
    );
};

export default Switcher;