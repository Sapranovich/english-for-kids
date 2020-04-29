/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// eslint-disable-next-line linebreak-style
function CardsTrain(ObjCards, N, K) {
  const out = `<div class="content-item" data="${K}">
    <div class="content-item-end">
        <div class="content-item-img" style= "background-image: url(${ObjCards[N][K].image});">
        </div>
        <div class="content-item-end-word">
        ${ObjCards[N][K].translation} 
        </div>
    </div>
    <div class="content-item-start">
<div class="content-item-img" style= "background-image: url(${ObjCards[N][K].image});" onclick="document.getElementById('${ObjCards[N][K].word}').play()">
<audio id="${ObjCards[N][K].word}" src="${ObjCards[N][K].audioSrc}"></audio>
    </div>
    <div class="content-item-inner">
    <div class="content-item-start-word">
    ${ObjCards[N][K].word}  
    </div>
    <div class="content-item-btn" >
    <img src="img/DownArrows.svg" alt="" onclick="document.getElementById('WOTER').play()">
    <audio id="WOTER" src="audio/WOTER.mp3"></audio>
    </div>
  </div>
    </div>
 </div>`;
  return out;
}
function CardsGame(ObjCards, N, K) {
  const out = `<div class="content-item-game" data="${
    K + 1
  }"style= "background-image: url(${ObjCards[N][K].image});">
<div class = "shadow"></div>
<audio id="${ObjCards[N][K].word}" src="${ObjCards[N][K].audioSrc}"></audio>
</div>`;
  return out;
}
function CardsMenu(ObjCards, K) {
  const out = `<div class="content-item-menu" data="${K + 1}">
<div class="content-item-menu-word">
    ${ObjCards[1][K].word}  
</div>
<div class="content-item-menu-img" style= "background-image: url(${ObjCards[1][K].image});">
</div>
</div>`;
  return out;
}
function CardsTrainWork() {
  const A = document.querySelectorAll('.content-item-start');
  const B = document.querySelectorAll('.content-item-end');
  const CONTENT = document.querySelector('.content-inner');
  const TimerAnimationRotation = 350;
  const TimerStartTrackingCursor = 400;
  let Data;
  function TimeOutB() {
    B[Data].classList.add('passive');
  }
  function TimeOutA() {
    A[Data].classList.remove('active');
  }
  function TimeOutMouseOut() {
    B[Data].addEventListener('mouseleave', () => {
      B[Data].classList.remove('passive');
      setTimeout(TimeOutA, TimerAnimationRotation);
    });
  }
  CONTENT.onclick = function (event) {
    const target = event.target;
    if (target.tagName == 'IMG') {
      Data = target.closest('.content-item').getAttribute('data');
      A[Data].classList.add('active');
      setTimeout(TimeOutB, TimerAnimationRotation);
      setTimeout(TimeOutMouseOut, TimerStartTrackingCursor);
    }
  };
}

export { CardsTrain, CardsTrainWork, CardsGame, CardsMenu };
