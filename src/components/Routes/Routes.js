import React from 'react';
import './Routes.scss';
import { BrowserRouter as Route, Switch, useLocation } from 'react-router-dom';
import Main from '../Main/main';
import {CSSTransition, TransitionGroup } from 'react-transition-group';

const Routes = () => {
    const lock = useLocation();

    return (
        <TransitionGroup>
        <CSSTransition timeout = {500}
              classNames = 'fade'
              key={lock.key}>
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
        </CSSTransition>
        </TransitionGroup>
    );
};

export default Routes;