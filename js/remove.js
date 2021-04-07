
const removeButton1 = document.querySelector('.delete-button1');
const removeButton2 = document.querySelector('.delete-button2');
const removeButton3 = document.querySelector('.delete-button3');
const removeButton4 = document.querySelector('.delete-button4');
const removeButton5 = document.querySelector('.delete-button5');
const removeButton6 = document.querySelector('.delete-button6');

removeButton1.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage1');
};

removeButton2.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage2');
};

removeButton3.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage3');
};

removeButton4.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage4');
};

removeButton5.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage5');
};

removeButton6.onclick = () => {
    console.log(remove);
    localStorage.removeItem('recentImage6');
};

