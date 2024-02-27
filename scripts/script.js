document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const visitsDisplay = document.querySelector('#visits')

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits + 1;
} else {
	visitsDisplay.textContent = `This is your first visit! 😱`;
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


