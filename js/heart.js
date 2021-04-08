const $heart1 = document.querySelector('.heart1');
const $heart2 = document.querySelector('.heart2');
const $heart3 = document.querySelector('.heart3');
const $heart4 = document.querySelector('.heart4');
const $heart5 = document.querySelector('.heart5');
const $heart6 = document.querySelector('.heart6');

// 토글 될 때마다 heart on off 

$heart1.onclick = () => {
  console.log('sucess');
  $heart1.setAttribute('src', '/images/heartOn.png');    
};

$heart2.onclick = () => {
  $heart2.setAttribute('src', '/images/heartOn.png');
};

$heart3.onclick = () => {
  $heart3.setAttribute('src', '/images/heartOn.png');
};

$heart4.onclick = () => {
  $heart4.setAttribute('src', '/images/heartOn.png');
};

$heart5.onclick = () => {
  $heart2.setAttribute('src', '/images/heartOn.png');
};

$heart6.onclick = () => {
  $heart6.setAttribute('src', '/images/heartOn.png');
};