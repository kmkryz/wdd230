// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(2); // Round off to two decimal places
  }
  

  




const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.24&lon=-73.2&units=imperial&appid=d354d22d1fdc9585f60e31bb1de88c80';



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            displayResults(data);
        }
    } catch (error) {
        console.error("Fetch error: " + error.message);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = ` ${Math.round(data.main.temp)}°F`; 
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; 
    let desc = data.weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc );
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


}


apiFetch();
