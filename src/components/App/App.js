import React, { useState, useEffect } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import './App.scss';
import Background from '../subComponents/background/background';
import Switcher from '../subComponents/switcher/switcher';
import Routes from '../Routes/Routes';

import {changBg, changVar} from '../../functions/theme';


function App() {
  const [theme, setTheme] = useState();
  const [themeAnim, setThemeAnim] = useState(false);

  useEffect(() => {
    
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme === 'light') {
      changVar('light');
    } else {
      setTimeout(() => {
        changVar(theme);
      }, 400);
    }
    localTheme ? setTheme(localTheme) : setMode('dark');

    changBg(theme);
    setTimeout(() => setThemeAnim(false), 400);
  }, [theme, themeAnim])

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const SwitcherTheme = () => {
    setThemeAnim(true);
    setMode(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Router>
      <div className={`app ${ themeAnim ? 'app__anim' : ''}`}>
        <div className='app__back'>
          <Background />
        </div>
        <div className='app__content'>
          <Routes />
        </div>
        <Switcher onClick={SwitcherTheme}
            theme={theme === 'dark' ? true : false}/>
      </div>
    </Router>
  );
}

export default App;
