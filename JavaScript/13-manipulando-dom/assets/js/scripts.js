function changeMode() {
    changeClass();
    changetext();
}

function changeClass() {
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changetext() {
    const ligthMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains('dark-mode')) {
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';


}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);