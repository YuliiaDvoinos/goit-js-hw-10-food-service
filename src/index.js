import './styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menu from './menu.json'


const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);