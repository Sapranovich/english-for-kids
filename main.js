/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
/* eslint-disable space-before-blocks */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// eslint-disable-next-line linebreak-style
import cards from './modules/cards.js';
import { CardsMenu } from './modules/CardTeamplate.js';
import { CardsMenuWork, WorkMenuStartWindow } from './modules/menu.js';
import { MenuKonstrToggle, MenuKonstrButton, MenuKonstr } from './modules/header.js';

const HEADER = '<header><div class = "game-img-victory"><img src="./img/success.jpg" alt=""></div><div class= "game-img-losing"><span></span><img src="./img/failure.jpg" alt=""></div><div class="burger-menu-inner"></div><div class="container1"><div class="header"></div></div></header>';
const COUNTER = '<section><div class="counter"><div class="container1"><div class="counter-items"></div></div></div></section>';
const CONTENT = '<section><div class="container1"><div class="content-inner"></div><div class ="game-btn"></div></div></section>';
const BODY = document.querySelector('body');
BODY.insertAdjacentHTML('beforeend', HEADER);
BODY.insertAdjacentHTML('beforeend', COUNTER);
BODY.insertAdjacentHTML('beforeend', CONTENT);
document.querySelector('.burger-menu-inner').innerHTML = MenuKonstr(cards);
document.querySelector('.header').innerHTML = `${MenuKonstrButton()}<div><p id = 'heading'>${cards[0][0]}</p></div>${MenuKonstrToggle('Train', 'Play')}`;
document.querySelector('.game-btn').innerHTML = '<button type="button" class="game-start-btn">Start Game</button><button type="button" class="game-repeat-btn">Repeat</button>';
const TRAINING_MODE = true;
const BurgerMenuNav = document.querySelectorAll('.nav-link');
function MENUSTART() {
  let out = '';
  for (let i = 0; i < cards[1].length; i++) {
    out += CardsMenu(cards, i);
  }
  document.querySelector('.content-inner').innerHTML = out;
}
MENUSTART();
BurgerMenuNav[0].style.background = '#395f37';
WorkMenuStartWindow();
CardsMenuWork(cards, TRAINING_MODE);

export { MENUSTART };