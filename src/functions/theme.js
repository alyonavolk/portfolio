export const changVar = (theme) => {
    document.body.style.setProperty('--bg-main', `var(--bg-main--${theme})`);
    document.body.style.setProperty('--bg', `var(--bg--${theme})`);
    document.body.style.setProperty('--main-text', `var(--main-text--${theme})`);
    document.body.style.setProperty('--sub-text', `var(--sub-text--${theme})`);
    document.body.style.setProperty('--grey-text', `var(--grey-text--${theme})`);
}

export const changBg = (theme) => {
    if (theme === 'dark') {
        document.body.style.background = 'linear-gradient(to right, #171717 50%, #1F1F1F 50%)';
      } else {
        document.body.style.background = 'linear-gradient(to right, #FFFFFF 50%, #E8E8E8 50%)';
    }
}