
  


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast'); 

const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80';
const lat = '41.24';
const lon = '-73.2';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentWeatherResponse.ok) {
            throw new Error(`HTTP error! status: ${currentWeatherResponse.status}`);
        }
        if (!forecastResponse.ok) {
            throw new Error(`HTTP error! status: ${forecastResponse.status}`);
        }

        const currentWeatherData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();
        displayResults(currentWeatherData, forecastData);
    } catch (error) {
        console.error("Fetch error: " + error.message);
    }
}



function displayResults(weatherData, forecastData) {
    currentTemp.innerHTML = `${Math.round(weatherData.main.temp)}°F`;
    const iconsrc = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    let forecastHTML = `<h2>5-Day Forecast:</h2>`;
    for (let i = 0; i < forecastData.list.length; i+=8) { 
        const dayData = forecastData.list[i];
        const dayTemp = Math.round(dayData.main.temp);
        const dayIcon = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;
        const dayDesc = dayData.weather[0].description;
        const date = new Date(dayData.dt * 1000);
        const options = { weekday: 'long' };
        const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date);

        forecastHTML += `
            <div class="forecast-day"> <!-- Added class here -->
                <b>${dayOfWeek}</b><br>
                <img src="${dayIcon}" alt="${dayDesc}" style="width:50px;"><br>
                ${dayTemp}°F<br>
                ${dayDesc}
            </div>
        `;
    }
    forecastContainer.innerHTML = forecastHTML;
}



apiFetch();