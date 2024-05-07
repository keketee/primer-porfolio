// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const buttonMenuElement = document.getElementById('button__menu');
const menuElement = document.getElementById('menu');

function handleMenu() {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
  } else {
    menuElement.classList.add('show');
  }
}

buttonMenuElement.addEventListener('click', handleMenu);
