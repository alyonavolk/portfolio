import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from '../Main/main';
import Background from '../subComponents/background/background';
import Header from '../subComponents/header/header';
import Switcher from '../subComponents/switcher/switcher';

/*анимацию попробовать заебашить с помощью reactTransitionGroup */

function App() {
  const [theme, setTheme] = useState(true);


  return (
    <Router>
      <div className="app" data-theme={`${theme ? 'default' : 'light'}`}>
        <div className='app__back'>
          <Background />
        </div>
        <div className='app__content'>
            <Header />
          <Switch>
            <Route exact path='/'>
              <div className='content__main'>
                <Main />
              </div>
            </Route>
          </Switch>
          <Switcher onClick={() => setTheme(!theme)} theme={theme}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
