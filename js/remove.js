
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

// X 버튼 클릭 시 데이터 삭제 
const $polaroidForm1 = document.querySelector('.polaroid-form1')
const $polaroidForm2 = document.querySelector('.polaroid-form2')
const $polaroidForm3 = document.querySelector('.polaroid-form3')
const $polaroidForm4 = document.querySelector('.polaroid-form4')
const $polaroidForm5 = document.querySelector('.polaroid-form5')
const $polaroidForm6 = document.querySelector('.polaroid-form6')

const $logOut = document.querySelector('.logout');


removeButton1.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage1');
  $polaroid1.classList.toggle('active');
  localStorage.removeItem(DATE);
  localStorage.removeItem(LOCATION);
  localStorage.removeItem(COMMENT);
  $imageViewer1.innerHTML = `<img class="image-view image-view1" src="#" alt="view1">`; 
  $polaroidForm1.innerHTML = `
            <form class="date-form">
              <span class="date-text">date</span>
              <input type="text" class="polaroid-form-date" placeholder="Enter Date">
            </form>
            <form class="location-form">
              <sapn class="location-text form-location">location</sapn>
              <input type="text" class="polaroid-form-location" placeholder="Enter Location">
            </form>
            <form class="comment-form">
              <span class="comment-text">comment</span>
              <input type="text" class="polaroid-form-comment" placeholder="Enter Comment">
            </form>`
};
removeButton2.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage2');
  $polaroid2.classList.toggle('active');
  localStorage.removeItem(DATE2);
  localStorage.removeItem(LOCATION2);
  localStorage.removeItem(COMMENT2);
  $imageViewer2.innerHTML = `<img class="image-view image-view2" src="#" alt="view1">`; 
  $polaroidForm2.innerHTML = `
            <form class="date-form2">
              <span class="date-text2">date</span>
              <input type="text" class="polaroid-form-date2" placeholder="Enter Date">
            </form>
            <form class="location-form2">
              <sapn class="location-text2 form-location">location</sapn>
              <input type="text" class="polaroid-form-location2" placeholder="Enter Location">
            </form>
            <form class="comment-form2">
              <span class="comment-text2">comment</span>
              <input type="text" class="polaroid-form-comment2" placeholder="Enter Comment">
            </form>`
};

removeButton3.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage3');
  $polaroid3.classList.toggle('active');
  localStorage.removeItem(DATE3);
  localStorage.removeItem(LOCATION3);
  localStorage.removeItem(COMMENT3);
  $imageViewer3.innerHTML = `
  
  <img class="image-view image-view3" src="#" alt="view1">`; 
  $polaroidForm3.innerHTML = `
            <form class="date-form3">
              <span class="date-text3">date</span>
              <input type="text" class="polaroid-form-date3" placeholder="Enter Date">
            </form>
            <form class="location-form3">
              <sapn class="location-text3 form-location">location</sapn>
              <input type="text" class="polaroid-form-location3" placeholder="Enter Location">
            </form>
            <form class="comment-form3">
              <span class="comment-text3">comment</span>
              <input type="text" class="polaroid-form-comment3" placeholder="Enter Comment">
            </form>`
};

removeButton4.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage4');
  $polaroid4.classList.toggle('active');
  localStorage.removeItem(DATE4);
  localStorage.removeItem(LOCATION4);
  localStorage.removeItem(COMMENT4);
  $imageViewer4.innerHTML = `<img class="image-view image-view4" src="#" alt="view1">`; 
  $polaroidForm4.innerHTML = `
            <form class="date-form4">
              <span class="date-text4">date</span>
              <input type="text" class="polaroid-form-date4" placeholder="Enter Date">
            </form>
            <form class="location-form4">
              <sapn class="location-text4 form-location">location</sapn>
              <input type="text" class="polaroid-form-location4" placeholder="Enter Location">
            </form>
            <form class="comment-form4">
              <span class="comment-text4">comment</span>
              <input type="text" class="polaroid-form-comment4" placeholder="Enter Comment">
            </form>`
};

removeButton5.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage5');
  $polaroid5.classList.toggle('active');
  localStorage.removeItem(DATE5);
  localStorage.removeItem(LOCATION5);
  localStorage.removeItem(COMMENT5);
  $imageViewer5.innerHTML = `<img class="image-view image-view5" src="#" alt="view1">`; 
  $polaroidForm5.innerHTML = `
            <form class="date-form5">
              <span class="date-text5">date</span>
              <input type="text" class="polaroid-form-date5" placeholder="Enter Date">
            </form>
            <form class="location-form5">
              <sapn class="location-text5 form-location">location</sapn>
              <input type="text" class="polaroid-form-location5" placeholder="Enter Location">
            </form>
            <form class="comment-form5">
              <span class="comment-text5">comment</span>
              <input type="text" class="polaroid-form-comment5" placeholder="Enter Comment">
            </form>`
};

removeButton6.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage6');
  $polaroid6.classList.toggle('active');
  localStorage.removeItem(DATE6);
  localStorage.removeItem(LOCATION6);
  localStorage.removeItem(COMMENT6);
  $imageViewer6.innerHTML = `<img class="image-view image-view6" src="#" alt="view1">`; 
  $polaroidForm6.innerHTML = `
            <form class="date-form6">
              <span class="date-text6">date</span>
              <input type="text" class="polaroid-form-date6" placeholder="Enter Date">
            </form>
            <form class="location-form6">
              <sapn class="location-text6 form-location">location</sapn>
              <input type="text" class="polaroid-form-location6" placeholder="Enter Location">
            </form>
            <form class="comment-form6">
              <span class="comment-text6">comment</span>
              <input type="text" class="polaroid-form-comment6" placeholder="Enter Comment">
            </form>`
};



$logOut.onclick = () => {
  localStorage.removeItem(USERNAME);
  $greetingForm.textConet = '';
  location.reload();
}
