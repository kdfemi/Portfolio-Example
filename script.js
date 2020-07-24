let theme = localStorage.getItem('theme');
const themeDots = document.querySelectorAll('.theme-dot');

if(!theme) {
    setTheme('light');
} else {
    setTheme(theme);
}
    
for(let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        const mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode === 'light') {
        document.getElementById('theme-style').setAttribute('href', 'default.css')
    } else if(mode === 'blue') {
        document.getElementById('theme-style').setAttribute('href', 'blue.css')

    } else if(mode === 'purple') {
        document.getElementById('theme-style').setAttribute('href', 'purple.css')

    } else if(mode === 'green') {
        document.getElementById('theme-style').setAttribute('href', 'green.css')

    } else {
        document.getElementById('theme-style').setAttribute('href', 'default.css')
    }
    localStorage.setItem('theme', mode)
}