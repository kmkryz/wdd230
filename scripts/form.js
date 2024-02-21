

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');



hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



document.getElementById('userForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password2').value;
    const messageDiv = document.getElementById('passwordMessage');


    if (password !== confirmPassword) {
        event.preventDefault();
        messageDiv.textContent = 'Passwords do not match. Please try again.';

        document.getElementById('password').value = '';
        document.getElementById('password2').value = '';
 
        document.getElementById('password').focus();
    } else {
        messageDiv.textContent = '';
    }
});




  

  function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
}
