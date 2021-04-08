
const removeButton1 = document.querySelector('.delete-button1');
const removeButton2 = document.querySelector('.delete-button2');
const removeButton3 = document.querySelector('.delete-button3');
const removeButton4 = document.querySelector('.delete-button4');
const removeButton5 = document.querySelector('.delete-button5');
const removeButton6 = document.querySelector('.delete-button6');

const $polaroid1 = document.querySelector('.polaroid1');
const $polaroid2 = document.querySelector('.polaroid2');
const $polaroid3 = document.querySelector('.polaroid3');
const $polaroid4 = document.querySelector('.polaroid4');
const $polaroid5 = document.querySelector('.polaroid5');
const $polaroid6 = document.querySelector('.polaroid6');
const $pols = document.querySelector('.polaroids');

document.addEventListener('DOMContentLoaded', function () {
  $pols.style.transform = "translateY(-50%)";
});

removeButton1.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage1');
  localStorage.removeItem(DATE);
  $imageViewer1.innerHTML = `<img class="image-view image-view1" src="#" alt="view1">`; 
  $dateForm.innerHTML = `
  <form class="date-form">
    <span class="date-text">date</span>
    <input type="text" class="polaroid-form-date" placeholder="Enter Date">
  </form>`
  
  $polaroid1.classList.toggle('active');
};

removeButton2.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage2');
  $polaroid2.classList.toggle('active');
};

removeButton3.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage3');
  $polaroid3.classList.toggle('active');
};

removeButton4.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage4');
  $polaroid4.classList.toggle('active');
};

removeButton5.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage5');
  $polaroid5.classList.toggle('active');
};

removeButton6.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage6');
  $polaroid6.classList.toggle('active');
};

// 로그아웃 버튼 클릭 시 모든 데이터 삭제
const $polaroidForm = document.querySelector('.polaroid-form')
const $logout = document.querySelector('.logout');

$logout.onclick = () => {
  console.log("logout!");
  localStorage.clear();
  
  // $pols.innerHTML = `
  // <img class="image-view image-view1" src="#" alt="view">`
  // $polaroidForm.innerHTML = `
  // <form class="date-form">
  //   <span class="date-text">date</span>
  //   <input type="text" class="polaroid-form-date" placeholder="Enter Date">
  // </form>
  // <form class="location-form">
  //   <sapn class="location-text">location</sapn>
  //   <input type="text" class="polaroid-form-location" placeholder="Enter Location">
  // </form>
  // <form class="comment-form">
  //   <span class="comment-text">comment</span>
  //   <input type="text" class="polaroid-form-comment" placeholder="Enter Comment">
  // </form>`
};