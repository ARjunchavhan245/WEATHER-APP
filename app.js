const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('location-not-found');


async function checkweather(city){
     const api_key = "4c445e7ae69f638d3409188bd4598549";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

     const weather_data = await fetch(`${url}`).then(response => response.json());

     if (weather_data.cod === `404`) {
        location_not_found.computedStyleMap.display = "flex";
        console.log("error")
        return;
     }


     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
     description.innerHTML = `${weather_data.weather[0].description}`;
     humidity.innerHTML = `${weather_data.main.humidity}%`;
     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;




     switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;                   
     }

    
}

searchBtn.addEventListener('click', ()=> {
    checkweather(inputBox.value);
});