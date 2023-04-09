import { useState, useEffect } from 'react';
import './routesPages.scss';
import { Routes, Route, useLocation } from "react-router-dom";
import Main from '../Main/main';
import PageName from '../subComponents/pageName/pageName';
import About from '../About/about';
import Skills from '../Skills/skills';
import Header from '../subComponents/header/header';

import {CSSTransition, TransitionGroup } from 'react-transition-group';
import Projects from '../Projects/projects';
import Contacts from '../Сontacts/contacts';
import { ROUTES } from '../../resources/ROUTES';

const RoutesPages = () => {
  const [menu, setMenu] = useState<boolean>();
  
    const lock = useLocation();
    
    useEffect(() => {
      setTimeout(() => {
        setMenu(false)
      }, 450);
    }, [lock])
    
    return (
      <>
        <Header menu={menu} setMenu={setMenu} />
        <TransitionGroup component={null}>
        <CSSTransition timeout = {800}
              classNames = 'fade'
              key={lock.pathname}>
              <Routes location={lock}>
                <Route path={ROUTES.main} 
                element={(
                  <div className='content__main'>
                    <PageName>Главная</PageName>
                    <Main />
                </div>
                )} />
                <Route path={ROUTES.about}
                element={(
                  <div className='content__block_middle'>
                    <PageName>Обо мне</PageName>
                    <About />
                  </div>
                )}/>
                <Route path={ROUTES.skills}
                element={(
                  <div className='content__block_middle'>
                    <PageName>Skills</PageName>
                    <Skills />
                  </div>
                )}/>
                <Route path={ROUTES.project}
                element={(
                  <div className='content__block_top'>
                    <PageName>Проекты</PageName>
                    <Projects />
                  </div>
                )}/>
                <Route path={ROUTES.contacts}
                element={(
                  <div className='content__block_middle'>
                    <PageName>Контакты</PageName>
                    <Contacts />
                  </div>
                )}/>
              </Routes>
        </CSSTransition>
        </TransitionGroup>
      </>
    );
};

export default RoutesPages;