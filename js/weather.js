function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "ed6a04e2d546d1438570fbdb5179980f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    const weatherForm = document.getElementById("weatherForm");
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description; 
            const temp = data.main.temp;
            const icon = data.weather[0].icon;
            const location = data.name; 

            console.log(`Weather: ${weather}, Temperature: ${temp}°C`);
            
            const weatherInfo = document.createElement('h2');
            weatherInfo.innerText = `현재날씨 ${weather}        ${temp}°C`
            weatherForm.appendChild(weatherInfo);

            const img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            img.style.width = '400px';
            img.style.height = '400px';
            img.style.margin = '-100px'; 
            img.style.padding = '-100px';
            const locationP = document.createElement('h3');
            locationP.innerText = location; 

            weatherForm.appendChild(img);
            weatherForm.appendChild(locationP)
        });
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
