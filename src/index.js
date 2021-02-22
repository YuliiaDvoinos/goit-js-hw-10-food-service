import './styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menu from './menu.json'


//ps. знаю, що по-хорошому треба було розкидати завдання по різним файлам і зробити через імпорти,
//але так як коду мало, то я залишила все в одному файлі і, звісно, за потреби їх розділю на окремі файли :)

//markup task
const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);


//local storage task
const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchToggleRef.addEventListener('change', themeChange);

function themeChange() {
    const checked = themeSwitchToggleRef.checked;
    checked
        ? bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
        : bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    
    const theme = checked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('Theme', theme);
    //2 варіант через іф/елс
     //  if (themeSwitchToggleRef.checked) {
    //    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
    //      localStorage.setItem('Theme', Theme.DARK)
    //  } else {
    //       bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)
    //      localStorage.setItem('Theme', Theme.LIGHT)
    //  }

}  
function saveTheme() {
    const currentTheme = localStorage.getItem('Theme');

    if (currentTheme === Theme.DARK) {
        themeSwitchToggleRef.checked = true;
        bodyRef.classList.add(Theme.DARK)
    } else {
        themeSwitchToggleRef.checked = false;
        bodyRef.classList.add(Theme.LIGHT);
    }
}
saveTheme();
