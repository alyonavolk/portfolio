import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Main from '../Main/main';
import Background from '../subComponents/background/background';
import Header from '../subComponents/header/header';
import Switcher from '../subComponents/switcher/switcher';
import {CSSTransition, TransitionGroup } from 'react-transition-group';

/*анимацию попробовать заебашить с помощью reactTransitionGroup */

function App() {
  const [theme, setTheme] = useState('dark');
  const [themeAnim, setThemeAnim] = useState(false);
  const lock = useLocation();

  useEffect(() => {
    const bgMain = `var(--bg-main--${theme})`;
    const bg = `var(--bg--${theme})`;

    document.body.style.setProperty('--bg-main', bgMain);
    document.body.style.setProperty('--bg', bg);
  }, [theme])
  useEffect(() => {
    setTimeout(() => setThemeAnim(false), 400);
  }, [themeAnim])

  const SwitcherTheme = () => {
    setThemeAnim(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={`app ${ themeAnim ? 'app__anim' : ''}`}>
      <div className='app__back'>
        <Background />
      </div>
      <TransitionGroup>
      <CSSTransition timeout = {500}
            classNames = 'fade'
            key={lock.key}>
          <div className='app__content'>
            <Header />
            <Switch location={lock}>
              <Route exact path='/'>
                <div className='content__main'>
                  <Main />
                </div>
              </Route>
              <Route exact path='/1'>
                <div className='content__main'>
                  <Main />
                </div>
              </Route>
            </Switch>
            <Switcher onClick={SwitcherTheme}
            theme={theme === 'dark' ? true : false}/>
          </div>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
