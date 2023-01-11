import './Routes.scss';
import { BrowserRouter as Route, Switch, useLocation } from 'react-router-dom';
import Main from '../Main/main';
import PageName from '../subComponents/pageName/pageName';
import About from '../About/about';
import Skills from '../Skills/skills';

import {CSSTransition, TransitionGroup } from 'react-transition-group';

const Routes = () => {
    const lock = useLocation();

    return (
        <TransitionGroup>
        <CSSTransition timeout = {800}
              classNames = 'fade'
              key={lock.key}>
              <Switch location={lock}>
                <Route exact path='/'>
                  <div className='content__main'>
                    <PageName>Главная</PageName>
                    <Main />
                  </div>
                </Route>
                <Route exact path='/about'>
                  <div className='content__about'>
                    <PageName>Обо мне</PageName>
                    <About />
                  </div>
                </Route>
                <Route exact path='/skills'>
                  <div className='content__about'>
                    <PageName>Skills</PageName>
                    <Skills />
                  </div>
                </Route>
                <Route exact path='/project'>
                  <div className='content__about'>
                    <PageName>Проекты</PageName>
                  </div>
                </Route>
                <Route exact path='/contacts'>
                  <div className='content__about'>
                    <PageName>Контакты</PageName>
                  </div>
                </Route>
              </Switch>
        </CSSTransition>
        </TransitionGroup>
    );
};

export default Routes;