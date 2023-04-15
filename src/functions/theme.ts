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
