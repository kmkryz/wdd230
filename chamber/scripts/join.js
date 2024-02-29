
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



document.addEventListener('DOMContentLoaded', function() {
    const currentTimeInMilliseconds = Date.now(); 
    document.getElementById('formLoadTime').value = currentTimeInMilliseconds; 
});






document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;









