// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(2); // Round off to two decimal places
  }
  
  // Function to check the input values and display wind chill
  function displayWindChill() {
    const temperature = parseFloat(document.getElementById("current-temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
  
    let windChillValue = "N/A"; 
  
   
    if (temperature <= 50 && windSpeed > 3.0) {
   
      windChillValue = calculateWindChill(temperature, windSpeed);
    }
  
   
    document.getElementById("wind-chill").textContent = windChillValue;
  }

  window.addEventListener('load', displayWindChill);
  