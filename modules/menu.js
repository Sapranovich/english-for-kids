/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import { CardsTrain, CardsTrainWork, CardsGame, CardsMenu } from './CardTeamplate.js';
import { onOffSwitch } from './header.js';
import { CardsGameWork } from './game.js';

let MENU = false;
let TRAINING_MODE = true;
function CloseMenu() {
  document.querySelector('.header-burger-menu-inner').style.transform = 'rotate(0deg)';
  document.querySelector('.header-burger-menu-inner').style.position = 'relative';
  document.querySelector('.burger-menu-inner').classList.remove('activeBurgerMenu');
  MENU = false;
}
function OpenMenu() {
  document.querySelector('.header-burger-menu-inner').style.transform = 'rotate(90deg)';
  document.querySelector('.header-burger-menu-inner').style.position = 'fixed';
  document.querySelector('.burger-menu-inner').classList.add('activeBurgerMenu');
  MENU = true;
}
function CardsMenuWork(ObjCards, MARKER) {
  let NUMBER = 0;
  let out = '';
  const BurgerMenuNav = document.querySelectorAll('.nav-link');
  document.querySelector('.burger-menu-inner').onclick = (event) => {
    if (event.target.classList.value == 'nav-link') {
      out = '';
      if (event.toElement.getAttribute('data') == 0) {
        NUMBER = 0;
        for (let i = 0; i < ObjCards[1].length; i++) {
          out += CardsMenu(ObjCards, i);
        }
        document.querySelector('.content-inner').innerHTML = out;
        document.querySelector('.game-start-btn').style.display = 'none';
        document.querySelector('.game-repeat-btn').style.display = 'none';
        document.querySelector('.counter-items').innerHTML = '';
        document.getElementById('heading').innerHTML = ObjCards[0][`${event.toElement.getAttribute('data')}`];
        const RamkaCardsMenu = document.querySelectorAll('.content-item-menu');
        const CardsMenuWord = document.querySelectorAll('.content-item-menu-word');
        BurgerMenuNav.forEach((el) => {
          el.style.background = '#5cb169';
        });
        BurgerMenuNav[NUMBER].style.background = '#395f37';
        if (MARKER) {
          RamkaCardsMenu.forEach((el) => {
            el.style.outline = '#c1c8e9 solid 15px';
          });
          CardsMenuWord.forEach((el) => {
            el.style.background = '#c1c8e9';
          });
        } else {
          RamkaCardsMenu.forEach((el) => {
            el.style.outline = '#4AF6CD solid 15px';
          });
          CardsMenuWord.forEach((el) => {
            el.style.background = '#4AF6CD';
          });
        }
      } else {
        NUMBER = Number(event.toElement.getAttribute('data'));
        document.getElementById('heading').innerHTML = ObjCards[0][NUMBER];
        if (MARKER) {
          for (let i = 0; i < ObjCards[Number(event.toElement.getAttribute('data')) + 1].length; i++) {
            out += CardsTrain(ObjCards, Number(event.toElement.getAttribute('data')) + 1, i);
          }
          document.querySelector('.content-inner').innerHTML = out;
          document.querySelector('.game-repeat-btn').style.display = 'none';
          CardsTrainWork();
          document.querySelector('.game-start-btn').style.display = 'none';
        } else {
          for (let i = 0; i < ObjCards[Number(event.toElement.getAttribute('data')) + 1].length; i++) {
            out += CardsGame(ObjCards, Number(event.toElement.getAttribute('data')) + 1, i);
          }
          document.querySelector('.content-inner').innerHTML = out;
          document.querySelector('.game-start-btn').style.display = 'inline-block';
          document.querySelector('.game-repeat-btn').style.display = 'none';
          document.querySelector('.counter-items').innerHTML = '';
        }
        BurgerMenuNav.forEach((el) => {
          el.style.background = '#5cb169';
        });
        BurgerMenuNav[NUMBER].style.background = '#395f37';
      }
    }
  };
  document.querySelector('.content-inner').addEventListener('click', (event) => {
    if (event.target.closest('.content-item-menu')) {
      out = '';
      NUMBER = Number(event.target.closest('.content-item-menu').getAttribute('data'));
      document.getElementById('heading').innerHTML = ObjCards[0][NUMBER];
      if (MARKER) {
        for (let i = 0; i < ObjCards[Number(event.target.closest('.content-item-menu').getAttribute('data')) + 1].length; i++) {
          out += CardsTrain(ObjCards, Number(event.target.closest('.content-item-menu').getAttribute('data')) + 1, i);
        }
        document.querySelector('.content-inner').innerHTML = out;
        document.querySelector('.game-start-btn').style.display = 'none';
        document.querySelector('.game-repeat-btn').style.display = 'none';
        document.querySelector('.counter-items').innerHTML = '';
        CardsTrainWork();
      } else {
        for (let i = 0; i < ObjCards[Number(event.target.closest('.content-item-menu').getAttribute('data')) + 1].length; i++) {
          out += CardsGame(ObjCards, Number(event.target.closest('.content-item-menu').getAttribute('data')) + 1, i);
        }
        document.querySelector('.content-inner').innerHTML = out;
        document.querySelector('.game-start-btn').style.display = 'inline-block';
      }
    }
    BurgerMenuNav.forEach((el) => {
      el.style.background = '#5cb169';
    });
    BurgerMenuNav[NUMBER].style.background = '#395f37';
  });
  document.querySelector('.switchBtn').onclick = () => {
    if (MARKER) {
      MARKER = false;
    } else {
      MARKER = true;
    }
    out = '';
    if (NUMBER > 0) {
      if (MARKER) {
        for (let i = 0; i < ObjCards[NUMBER + 1].length; i++) {
          out += CardsTrain(ObjCards, NUMBER + 1, i);
        }
        document.querySelector('.content-inner').innerHTML = out;
        document.querySelector('.game-start-btn').style.display = 'none';
        document.querySelector('.game-repeat-btn').style.display = 'none';
        document.querySelector('.counter-items').innerHTML = '';
        CardsTrainWork();
      } else {
        for (let i = 0; i < ObjCards[NUMBER + 1].length; i++) {
          out += CardsGame(ObjCards, NUMBER + 1, i);
        }
        document.querySelector('.content-inner').innerHTML = out;
        document.querySelector('.game-start-btn').style.display = 'inline-block';
      }
    }
  };
}
function WorkMenuStartWindow() {
  const container = document.querySelector('#switchContainer');
  document.querySelector('body').onclick = function () {
    if (event.target.getAttribute('id') != 'Burger' && MENU) CloseMenu();
    if (event.target.getAttribute('id') == 'Burger' && MENU) {
      CloseMenu();
    } else if (event.target.getAttribute('id') == 'Burger' && !MENU) {
      OpenMenu();
    } else if (event.target.classList.value == 'switchBtn' && TRAINING_MODE) {
      onOffSwitch(container);
      TRAINING_MODE = false;
      CloseMenu();
    } else if (event.target.classList.value == 'switchBtn' && !TRAINING_MODE) {
      onOffSwitch(container);
      TRAINING_MODE = true;
      CloseMenu();
    } else if (event.target.classList.value == 'game-start-btn') {
      document.querySelector('.game-start-btn').style.display = 'none';
      document.querySelector('.game-repeat-btn').style.display = 'inline-block';
      const SHADOW = document.querySelectorAll('.content-item-game .shadow');
      SHADOW.forEach((el) => {
        el.style.display = 'none';
      });
      CardsGameWork();
    }
  };
}

export { CardsMenuWork, WorkMenuStartWindow };
