//const $imageInput = document.querySelector('.image-input');
const $imageInput1 = document.querySelector('.image-input1');
const $imageInput2 = document.querySelector('.image-input2');
const $imageInput3 = document.querySelector('.image-input3');
const $imageInput4 = document.querySelector('.image-input4');
const $imageInput5 = document.querySelector('.image-input5');
const $imageInput6 = document.querySelector('.image-input6');
const $imageView1 = document.querySelector('.image-view1'); 
const $imageView2 = document.querySelector('.image-view2'); 
const $imageView3 = document.querySelector('.image-view3'); 
const $imageView4 = document.querySelector('.image-view4'); 
const $imageView5 = document.querySelector('.image-view5'); 
const $imageView6 = document.querySelector('.image-view6'); 


/* localStorage에서 이미지 경로 읽어와서 보여주는 함수 */
/* localStorage에서 recentImage의 value값을 가져와 이미지 경로를 다시 지정해줌 */
// const localStorageImage = () => {
//   const recentImageDataUrl = localStorage.getItem('recentImage'); // key가 recentImage인 value값을 읽어옴
//   if (recentImageDataUrl) $imageView.setAttribute('src', recentImageDataUrl)
// };

// const viewImage = () => {  
//   const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
//   reader.onload = () => localStorage.setItem('recentImage', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
//   reader.readAsDataURL('$imageInput1'.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
// };


/* 이벤트 핸들러 부분*/

$imageInput1.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  reader.onload = () => localStorage.setItem('recentImage1', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
  reader.readAsDataURL($imageInput1.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  const recentImageDataUrl = localStorage.getItem('recentImage1'); // key가 recentImage인 value값을 읽어옴
  $imageView1.setAttribute('src', recentImageDataUrl)
  $imageInput1.style.display = 'none';
};

$imageInput2.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); 
  reader.onload = () => localStorage.setItem('recentImage2', reader.result); 
  reader.readAsDataURL($imageInput2.files[0]); 
  const recentImageDataUrl = localStorage.getItem('recentImage2'); // key가 recentImage인 value값을 읽어옴
  $imageView2.setAttribute('src', recentImageDataUrl)
  $imageInput2.style.display = 'none';
  };

$imageInput3.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  reader.onload = () => localStorage.setItem('recentImage3', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
  reader.readAsDataURL($imageInput3.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  const recentImageDataUrl = localStorage.getItem('recentImage3'); // key가 recentImage인 value값을 읽어옴
  $imageView3.setAttribute('src', recentImageDataUrl)
  $imageInput3.style.display = 'none';
};

$imageInput4.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  reader.onload = () => localStorage.setItem('recentImage4', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
  reader.readAsDataURL($imageInput3.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  const recentImageDataUrl = localStorage.getItem('recentImage4'); // key가 recentImage인 value값을 읽어옴
  $imageView4.setAttribute('src', recentImageDataUrl)
};

$imageInput5.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  reader.onload = () => localStorage.setItem('recentImage5', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
  reader.readAsDataURL($imageInput5.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  const recentImageDataUrl = localStorage.getItem('recentImage5'); // key가 recentImage인 value값을 읽어옴
  $imageView5.setAttribute('src', recentImageDataUrl)
};

$imageInput6.onchange = e => {
  console.log(e.target.id);
  const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴
  reader.onload = () => localStorage.setItem('recentImage6', reader.result); // recentImage value에 reader가 읽어온 result를 지정함. localStorage에 이미지 저장하는 함수 
  reader.readAsDataURL($imageInput3.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  const recentImageDataUrl = localStorage.getItem('recentImage6'); // key가 recentImage인 value값을 읽어옴
  $imageView6.setAttribute('src', recentImageDataUrl)
};

//document.addEventListener('DOMContentLoaded', localStorageImage);
