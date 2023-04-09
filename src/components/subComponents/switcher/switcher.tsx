import React from 'react';
import './switcher.scss';

interface ISwitcher {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    theme: boolean;
}

const Switcher: React.FC<ISwitcher> = ({onClick, theme}) => {
    return (
        <button onClick={onClick} className={`switch ${theme ? 'switch_dark' : 'switch_light'}`}>
           <span className={`${theme ? 'switch_darkBG' : 'switch_lightBG'}`}></span>
       </button>
    );
};

export default Switcher;