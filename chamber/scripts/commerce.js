
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});






document.addEventListener('DOMContentLoaded', function() {
    const visitMessageElement = document.getElementById('visitMessage'); 
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime(); 

    let message = "Welcome! Let us know if you have any questions."; 

    if (lastVisit) {
        const lastVisitTime = parseInt(lastVisit, 10); 
        const timeDifference = now - lastVisitTime; 
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); 

        if (daysDifference < 1) {
            message = "Back so soon! Awesome!";
        } else {
            const daysRounded = Math.floor(daysDifference); 
            const dayWord = daysRounded === 1 ? "day" : "days"; 
            message = `You last visited ${daysRounded} ${dayWord} ago.`;
        }
    }

    
    visitMessageElement.textContent = message;

   
    localStorage.setItem('lastVisit', now.toString()); 
});


document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.member-slideshow .mem-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');

        // Show the specified slide
        slides[index].style.display = 'flex';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Initially show the first slide
    showSlide(currentIndex);

    // Change slide every 3 seconds
    setInterval(nextSlide, 10000);
});




let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}



//Code for dark mode and styling for elements//
document.getElementById('checkbox').addEventListener('change', function(event) {
    if (event.target.checked) {

        const joinDarkButton = document.querySelector('#join');
        
        // Apply dark mode styles
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#e0e0e0";


        document.querySelector('header').style.backgroundColor = "#242424";
        document.querySelector('header').style.color = "#E4EBFB";
        document.querySelector('#join').style.backgroundColor = "#242424";
        document.querySelector('#join').style.color = "#e0e0e0";
        document.querySelector('.slideshow-card').style.backgroundColor= "#c0bcbc"
        document.querySelector('.text-box').style.backgroundColor= "#121212";
        document.querySelector('.text-box').style.color= "#E4EBFB";
        document.querySelector('.event-section').style.backgroundColor= "#c0bcbc"
        document.querySelector('.member-slideshow').style.backgroundColor= "#c0bcbc"
        document.querySelector('.map-weather-container').style.backgroundColor= "#c0bcbc"
        document.querySelector('.weather-card').style.backgroundColor= "#121212";
        document.querySelector('.weather-card').style.color= "#E4EBFB";



        joinDarkButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#363636'; //hover color


        });

        // Event listener for mouseout - revert to original
        joinDarkButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#242424'; // Original color
            
        });

        document.querySelectorAll('.event-box').forEach(function(box) {
            box.style.backgroundColor = "#121212";
            box.style.color = "#E4EBFB";
        });
        
        document.querySelectorAll('.member-box').forEach(function(box) {
            box.style.backgroundColor = "#121212";
            box.style.color = "#E4EBFB";

            box.querySelectorAll('a').forEach(function(link) {
               link.style.color = "#f5fd74";
    });

        });


        
    } else {

        const joinLightButton = document.querySelector('#join');
        
        // Revert to light mode styles
        document.body.style.backgroundColor = "#E4EBFB";
        document.body.style.color = "#353535";

        // Revert styles for specific elements
        document.querySelector('header').style.backgroundColor = "#E4EBFB";
        document.querySelector('header').style.color = "#353535";
        document.querySelector('#join').style.backgroundColor = "#E4EBFB";
        document.querySelector('#join').style.color = "#353535";
        document.querySelector('.slideshow-card').style.backgroundColor= "#f2f2f2"
        document.querySelector('.text-box').style.backgroundColor= "#f8f8f8";
        document.querySelector('.text-box').style.color= "#353535";
        document.querySelector('.event-section').style.backgroundColor= "#f2f2f2"
        document.querySelector('.member-slideshow').style.backgroundColor= "#f2f2f2"
        document.querySelector('.map-weather-container').style.backgroundColor= "#f2f2f2"
        document.querySelector('.weather-card').style.backgroundColor= "#f8f8f8";
        document.querySelector('.weather-card').style.color= "#353535";

        joinLightButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#cfdcf9'; //hover color
        });

        // Event listener for mouseout - revert to original
        joinLightButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#E4EBFB'; // Original color
        });
    

        document.querySelectorAll('.event-box').forEach(function(box) {
            box.style.backgroundColor = "#f8f8f8";
            box.style.color = "#353535";
        });
        
        document.querySelectorAll('.member-box').forEach(function(box) {
            box.style.backgroundColor = "#f8f8f8";
            box.style.color = "#353535";
        });
    }
});


document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;









