import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Background from '../subComponents/background/background';
import Switcher from '../subComponents/switcher/switcher';
import Routes from '../Routes/Routes';
import Header from '../subComponents/header/header';


function App() {
  const [theme, setTheme] = useState('dark');
  const [themeAnim, setThemeAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    document.body.style.setProperty('--bg-main', `var(--bg-main--${theme})`);
    document.body.style.setProperty('--bg', `var(--bg--${theme})`);
    document.body.style.setProperty('--main-text', `var(--main-text--${theme})`);
    document.body.style.setProperty('--sub-text', `var(--sub-text--${theme})`);
    document.body.style.setProperty('--grey-text', `var(--grey-text--${theme})`);
    }, 350);
    
    if (theme === 'dark') {
      document.body.style.background = 'linear-gradient(to right, #171717 50%, #1F1F1F 50%)';
      document.body.style.transition = 'background 800ms linear';
    } else {
      document.body.style.background = 'linear-gradient(to right, #FFFFFF 50%, #E8E8E8 50%)';
      document.body.style.transition = 'background 800ms linear';
    }
    setTimeout(() => setThemeAnim(false), 350);
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
        <Switcher onClick={SwitcherTheme}
            theme={theme === 'dark' ? true : false}/>
      </div>
    </Router>
  );
}

export default App;
