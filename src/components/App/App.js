import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Background from '../subComponents/background/background';
import Switcher from '../subComponents/switcher/switcher';
import Routes from '../Routes/Routes';
import Header from '../subComponents/header/header';

/*анимацию попробовать заебашить с помощью reactTransitionGroup */

function App() {
  const [theme, setTheme] = useState('dark');
  const [themeAnim, setThemeAnim] = useState(false);

  useEffect(() => {
    const bgMain = `var(--bg-main--${theme})`;
    const bg = `var(--bg--${theme})`;

    setTimeout(() => {
    document.body.style.setProperty('--bg-main', bgMain);
    document.body.style.setProperty('--bg', bg);
    }, 350);
    
    if (theme === 'dark') {
      document.body.style.transition = 'background 400ms linear';
      document.body.style.background = 'linear-gradient(to right, #171717 50%, #1F1F1F 50%)';
    } else {
      document.body.style.transition = 'background 400ms linear';
      document.body.style.background = 'linear-gradient(to right, #FFFFFF 50%, #E8E8E8 50%)';
    }
    setTimeout(() => setThemeAnim(false), 400);
  }, [theme, themeAnim])

  const SwitcherTheme = () => {
    setThemeAnim(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Router>
      <div className={`app ${ themeAnim ? 'app__anim' : ''}`}>
        <div className='app__back'>
          <Background />
        </div>
        <div className='app__content'>
          <Header />
          <Routes />
        </div>
        <div className='app__swicth'>
        <Switcher onClick={SwitcherTheme}
            theme={theme === 'dark' ? true : false}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
