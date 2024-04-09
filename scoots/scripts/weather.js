

document.addEventListener('DOMContentLoaded', function() {
    fetchCurrentWeather();
    fetchForecastWeather();
});

function fetchCurrentWeather() {
    const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80';
    const lat = '20.42';
    const lon = '-86.9'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('currentTemp').textContent = `${Math.round(data.main.temp)}°F`;
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
            document.getElementById('highTemp').textContent = `${Math.round(data.main.temp_max)}°F`;

            
            data.weather.forEach(condition => {
                const iconUrl = `http://openweathermap.org/img/wn/${condition.icon}.png`;
                document.getElementById('currentCondition').innerHTML= `<br><img src="${iconUrl}" alt="${condition.description}" title="${condition.main}"><p>${condition.main} - ${condition.description}</p>`;
            });
        })
        .catch(console.error);
}

function fetchForecastWeather() {
    const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80'; 
    const lat = '20.42'; 
    const lon = '-86.9'; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const now = new Date();
            const tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000));
            const targetTime = `${tomorrow.getFullYear()}-${('0' + (tomorrow.getMonth() + 1)).slice(-2)}-${('0' + tomorrow.getDate()).slice(-2)} 15:00:00`;
            const forecast = data.list.find(entry => entry.dt_txt === targetTime);

           

            if (forecast) {
            
                forecast.weather.forEach(condition => {
                    const iconUrl = `http://openweathermap.org/img/wn/${condition.icon}.png`;
                    document.getElementById('nextDayCondition').innerHTML= `<br><br><img src="${iconUrl}" alt="${condition.description}" title="${condition.main}"><p>${condition.main} - ${condition.description}</p>`;
                    document.getElementById('nextDayTemp').textContent = `${Math.round(forecast.main.temp)}°F`;
                });
            } else {
                document.getElementById('nextDayTemp').textContent = 'Forecast unavailable';
            }
        })
        .catch(console.error);
}

function closeHighTempMessage() {
    document.getElementById('highTempMessage').style.display = 'none';
}






