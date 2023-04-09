import React from "react";

export interface ITheme {
  bg_main: string;
  bg: string;
  main_text: string;
  sub_text: string;
  grey_text: string;
}

export const lightTheme: ITheme = {
    bg_main: '',
    bg: '',
    main_text: '',
    sub_text: '',
    grey_text: ''
}

export const darkTheme: ITheme = {
    bg_main: '',
    bg: '',
    main_text: '',
    sub_text: '',
    grey_text: ''
}

interface IStyleTheme {
    
}


export const ThemeContext = React.createContext<ITheme>(darkTheme);

export const changVar = (theme: string | undefined) => {
    document.body.style.setProperty('--bg-main', `var(--bg-main--${theme})`);
    document.body.style.setProperty('--bg', `var(--bg--${theme})`);
    document.body.style.setProperty('--main-text', `var(--main-text--${theme})`);
    document.body.style.setProperty('--sub-text', `var(--sub-text--${theme})`);
    document.body.style.setProperty('--grey-text', `var(--grey-text--${theme})`);
}

export const changBg = (theme: string | undefined) => {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#171717';
      } else {
        document.body.style.backgroundColor = '#FFFFFF';
    }
}
