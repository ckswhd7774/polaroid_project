const USERNAME = "username";
const HIDE = "hide";

const $greetingForm = document.querySelector('.main-greeting');
const $greetingInput = document.querySelector('.input-name');
const $greetingText = document.querySelector('.main-greeting-hello');


const greetingInput = e => {
  // e.prevevtDefault();
  // local storage에 유저 입력값 저장, 이름(값) 불러오기
  localStorage.setItem(USERNAME, $greetingInput.value);
  console.log(USERNAME);
  greetingText();
  greetingInput.classList.add(HIDE);
};
const greetingText = () => {
  if (localStorage.getItem(USERNAME) === null) {
    $greetingText.innerText = "Enter your namE";
  } else {
    $greetingText.innerText = `안녕하세요. ${localStorage.getItem(USERNAME)}님 :)`;
    // USERNAME 데이터 지워야 됌
    // localStorage.removeItem(USERNAME);
    // $greetingInput[0].setAttribute('type', 'hidden');
  }

}
const greetingInit = () => {
  greetingText();
  $greetingForm.addEventListener("submit", greetingInput);
};

greetingInit();


// $greetingInput.onkeypress = e => {
//   const content = $greetingInput.value;
//   if (e.key !== 'Enter' || !content) return;
//   if (localStorage.getItem(USERNAME) === null) {
//     $greetingText.innerText = "이름을 입력하세요";
//   } else {
//     $greetingText.innerText = `안녕하세요. ${localStorage.getItem(USERNAME)}님 :)`;
// }};