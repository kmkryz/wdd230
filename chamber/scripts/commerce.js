
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//banner for meet and greet
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3) {
      document.getElementById("meetGreetBanner").style.display = "block";
    }
  });
  
  function closeBanner() {
    document.getElementById("meetGreetBanner").style.display = "none";
  }






//Member spotlight, randomly select 2-3 random silver/gold members


const urlMem = "https://kmkryz.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(urlMem);
    const data = await response.json();
    filterAndDisplayMembers(data.members);

}


    const filterAndDisplayMembers = (members) => {
        
        const silverGoldMembers = members.filter(member => member.membershiplevel === 'silver member' || member.membershiplevel === 'gold member');

       
        const selectedMembers = silverGoldMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);

        
        const container = document.getElementById('member-spotlight');
        container.innerHTML = ''; 

        selectedMembers.forEach(member => {
            const memberHTML = `
                <div class="member-box">
                    <img src="${member.img}" alt="${member.name}" class="member-image" width="200" height="200">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p><a href="tel:${member.phonenumber}">${member.phonenumber}</a></p>
                    <p><a href="${member.websiteurl}" target="_blank">Visit Website</a></p>
                </div>
            `;

            
            container.innerHTML += memberHTML;
        });
    }

    getMemberData();








//image slideshow

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
    setTimeout(showSlides, 6000); 
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









