/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import { MENUSTART } from '../main.js';
import { CounterFalse, CounterTrue, Result } from './Counter.js';

function CardsGameWork() {
  function arrayСreation() {
    const arrayAudi = [];
    let i = 0;
    document.querySelectorAll('.content-item-game').forEach((el) => {
      arrayAudi[i] = el.lastElementChild.getAttribute('src');
      i++;
    });
    return arrayAudi;
  }
  function shuffle(arr) {
    let j; let temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  function PlayAudio(array, i) {
    const sound = document.createElement('audio');
    sound.src = array[i];
    sound.play();
  }
  function Game(array, i) {
    let errors = 0;
    document.onclick = function (event) {
      if (event.target.classList.value == 'content-item-game') {
        if (event.target.lastElementChild.getAttribute('src') == array[i] && i < array.length - 1) {
          document.querySelector('.counter-items').innerHTML += CounterTrue();
          document.querySelectorAll('.content-item-game .shadow')[event.target.getAttribute('data') - 1].style.display = 'inline-block';
          i++;
          PlayAudio(array, i);
        } else if (i < array.length - 1) {
          document.querySelector('.counter-items').innerHTML += CounterFalse();
          errors += 1;
        } else {
          document.querySelector('.game-repeat-btn').style.display = 'none';
          document.querySelectorAll('.content-item-game .shadow')[event.target.getAttribute('data') - 1].style.display = 'inline-block';
          Result(errors);
          MENUSTART();
          i = 0;
        }
      } else if (event.target.classList.value == 'game-repeat-btn') {
        PlayAudio(array, i);
      }
    };
  }
  const i = 0;
  const arrayAudi = arrayСreation();
  shuffle(arrayAudi);
  PlayAudio(arrayAudi, i);
  Game(arrayAudi, i);
}

export { CardsGameWork };
