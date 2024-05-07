function switchTheme() {
    var themeLink = document.getElementById('theme-link');
    var currentTheme = themeLink.getAttribute('href');

    //检查当前主题并开关到其他主题
    if(currentTheme === '/assets/css/theme-simple.css') {
        themeLink.href = '/assets/css/theme-simple-dark.css';
    } else {
        themeLink.href = '/assets/css/theme-simple.css';
    }
}