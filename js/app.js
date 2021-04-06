const $imageUploader = document.querySelector('.image-input'); // file input node
const $imageView = document.querySelector('.image-view'); // image node
const reader = new FileReader(); // 비동기적으로 유저 컴퓨터에 저장된 파일을 읽어옴

/* localStorage에서 recentImage의 value값을 가져와 이미지 경로를 다시 지정해주는 함수 */
const localStorageImage = () => {
  const recentImageDataUrl = localStorage.getItem('recentImage'); // key가 recentImage인 value값
  if (recentImageDataUrl) $imageView.setAttribute('src', recentImageDataUrl)
};


/* 이벤트 핸들러 부분*/
document.addEventListener('DOMContentLoaded', localStorageImage);

reader.onload = () => localStorage.setItem('recentImage', reader.result); // recentImage value에 reader가 읽어온 result를 지정한다.

$imageUploader.onchange = () => {
  reader.readAsDataURL($imageUploader.files[0]); // readAsDataURL가 file에서 이미지를 읽어온 후 image-view에서 보여줌
  console.log('success');
};

