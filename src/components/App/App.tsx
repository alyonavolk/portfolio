import React, { useEffect, useState } from 'react';
import './app.scss';

import {ThemeContext, ITheme, darkTheme, changBg, changVar} from '../../functions/theme';
import Switcher from '../subComponents/switcher/switcher';
import RoutesPages from '../RoutesPages/RoutesPages';
import Background from '../subComponents/background/background';


function App() {

  const [colorTheme, setColorTheme] = useState<ITheme>(darkTheme);
  const [theme, setTheme] = useState<string>();
  const [themeAnim, setThemeAnim] = useState<boolean>(false);


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

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const SwitcherTheme = () => {
    setThemeAnim(true);
    setMode(theme === 'dark' ? 'light' : 'dark');
  }


  return (
    <ThemeContext.Provider value={colorTheme}>
      <div className={`app ${ themeAnim ? 'app__anim' : ''}`}>
        <div className='app__back'>
          <Background />
        </div>
        <div className='app__content'>
          <RoutesPages />
        </div>
        <Switcher onClick={SwitcherTheme}
            theme={theme === 'dark' ? true : false}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
