/* eslint-disable linebreak-style */
/* eslint-disable default-case */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
function CounterFalse() {
  let out = '';
  PlayAudioGame(0);
  return (out += '<div class="counter-item"><img src="./img/ShapeNo.png" alt=""></div>');
}
function CounterTrue() {
  let out = '';
  PlayAudioGame(1);
  return (out += '<div class="counter-item"><img src="./img/Shape.png" alt=""></div>');
}
function Result(ERRORS) {
  if (ERRORS > 0) {
    PlayAudioGame(3, ERRORS);
  } else {
    PlayAudioGame(2);
  }
  document.querySelector('.counter-items').innerHTML = '';
}
function VictoryNone() {
  document.querySelector('.game-img-victory').style.display = 'none';
}
function LosingNone() {
  document.querySelector('.game-img-losing').style.display = 'none';
}
function PlayAudioGame(i, ERRORS) {
  const sound = document.createElement('audio');
  switch (i) {
    case 0:
      sound.src = './audio/error.mp3';
      sound.play();
      break;
    case 1:
      sound.src = './audio/correct.mp3';
      sound.play();
      break;
    case 2:
      document.querySelector('.game-img-victory').style.display = 'block';
      sound.src = './audio/success.mp3';
      sound.play();
      setTimeout(VictoryNone, 2000);
      break;
    case 3:
      document.querySelector('.game-img-losing').style.display = 'block';
      document.querySelector('.game-img-losing span').innerHTML = `${ERRORS} - Error(s)!!!`;
      sound.src = './audio/failure.mp3';
      sound.play();
      setTimeout(LosingNone, 2000);
      break;
  }
}

export { CounterFalse, CounterTrue, Result };
