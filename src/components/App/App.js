import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from '../Main/main';
import Background from '../subComponents/background/background';
import Header from '../subComponents/header/header';


function App() {
  return (
    <Router>
      <div className="app">
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
        </div>
      </div>
    </Router>
  );
}

export default App;
