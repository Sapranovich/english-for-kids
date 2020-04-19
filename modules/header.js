/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function MenuKonstr(ObjCards) {
  let out = '<div class="burger-menu-list"><nav class="nav flex-column">';
  for (let i = 0; i < ObjCards[0].length; i++) {
    out += `<a class="nav-link" href="#" data = "${i}"> ${ObjCards[0][i]} </a>`;
  }
  out += '</nav></div>';
  return out;
}
function MenuKonstrButton() {
  const out = `<div class="header-burger-menu">
      <div class="header-burger-menu-inner">
      <img id = 'Burger' src="./img/Burger_English.svg" alt="">
      </div></label></div>
  </div>`;
  return out;
}
function MenuKonstrToggle(mode1, mode2) {
  const out = `<div class="header-toggle">
  <div class="header-toggle-train">
    ${mode1}
  </div>
  <div class="switchContainer" id="switchContainer">
    <div class="switchBg"></div>
    <div class="switchBtn"></div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="5px" height= "40px">
    <defs>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      </filter>
    </defs>
</svg>
  <div class="header-toggle-game">${mode2}</div></div>`;
  return out;
}
function onOffSwitch(container) {
  const MarkerTrain = document.querySelector('.header-toggle-train');
  const MarkerGame = document.querySelector('.header-toggle-game');
  const RamkaCardsMenu = document.querySelectorAll('.content-item-menu');
  const CardsMenuWord = document.querySelectorAll('.content-item-menu-word');
  const BurgerMenuList = document.querySelectorAll('.burger-menu-list a');
  const HEADING = document.getElementById('heading');

  if (container.classList.contains('switchOn')) {
    container.classList.remove('switchOn');
    container.classList += ' switchOff';
    MarkerTrain.style.color = '#c1c8e9';
    MarkerGame.style.color = 'transparent';
    HEADING.style.color = '#c1c8e9';
    RamkaCardsMenu.forEach((el) => {
      el.style.outline = '#c1c8e9 solid 15px';
    });
    CardsMenuWord.forEach((el) => {
      el.style.background = '#c1c8e9';
    });
    BurgerMenuList.forEach((el) => {
      el.style.color = '#c1c8e9';
    });
  } else {
    container.classList.remove('switchOff');
    container.classList += ' switchOn';
    MarkerTrain.style.color = 'transparent';
    MarkerGame.style.color = '#4AF6CD';
    HEADING.style.color = '#4AF6CD';
    RamkaCardsMenu.forEach((el) => {
      el.style.outline = '#4AF6CD solid 15px';
    });
    CardsMenuWord.forEach((el) => {
      el.style.background = '#4AF6CD';
    });
    BurgerMenuList.forEach((el) => {
      el.style.color = '#4AF6CD';
    });
  }
}

export { MenuKonstrToggle, MenuKonstrButton, MenuKonstr, onOffSwitch };
