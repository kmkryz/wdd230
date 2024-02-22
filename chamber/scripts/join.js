
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






//Code for dark mode and styling for elements//
document.getElementById('checkbox').addEventListener('change', function(event) {
    if (event.target.checked) {

         //Apply dark mode styles
         document.body.style.backgroundColor = "#121212";
         document.body.style.color = "#e0e0e0";
 
 
         document.querySelector('header').style.backgroundColor = "#242424";
         document.querySelector('header').style.color = "#E4EBFB";
         document.querySelector('.sidebar').style.backgroundColor= "#121212"
         document.querySelector('#visitMessage').style.backgroundColor= "#c0bcbc";
         document.querySelector('#visitMessage').style.color= "#000"
         document.querySelector('.heading-section').style.backgroundColor= "#c0bcbc";
         document.querySelector('.heading-section').style.color= "#000"
         document.querySelector('.calendar-section').style.backgroundColor= "#c0bcbc";
         document.querySelector('.calendar-section').style.color= "#000"
         document.querySelector('.demographics-section').style.backgroundColor= "#c0bcbc";
         document.querySelector('.demographics-section').style.color= "#000"
         document.querySelector('.upcoming-section').style.backgroundColor= "#c0bcbc";
         document.querySelector('.upcoming-section').style.color= "#000"



        
    } else {
        // Revert to light mode styles
        document.body.style.backgroundColor = "#E4EBFB";
        document.body.style.color = "#353535";

        // Revert styles for specific elements
        document.querySelector('header').style.backgroundColor = "#E4EBFB";
        document.querySelector('header').style.color = "#353535";
        document.querySelector('.sidebar').style.backgroundColor= "#f2f2f2"
        document.querySelector('#visitMessage').style.backgroundColor= "#f8f8f8";
        document.querySelector('#visitMessage').style.color= "#353535"
        document.querySelector('.heading-section').style.backgroundColor= "#f8f8f8";
        document.querySelector('.heading-section').style.color= "#353535"
        document.querySelector('.calendar-section').style.backgroundColor= "#f8f8f8";
        document.querySelector('.calendar-section').style.color= "#353535"
        document.querySelector('.demographics-section').style.backgroundColor= "#f8f8f8";
        document.querySelector('.demographics-section').style.color= "#353535"
        document.querySelector('.upcoming-section').style.backgroundColor= "#f8f8f8";
        document.querySelector('.upcoming-section').style.color= "#353535"
        
    }
});


document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;









