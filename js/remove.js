
const removeButton = document.querySelector('.delete-button');

removeButton.onclick = () => {
    console.log(localStorage);
    localStorage.removeItem('recentImage1');
    localStorage.removeItem('recentImage2');
    localStorage.removeItem('recentImage3');
    localStorage.removeItem('recentImage4');
    localStorage.removeItem('recentImage5');
    localStorage.removeItem('recentImage6');
    localStorage.removeItem('username');
};



