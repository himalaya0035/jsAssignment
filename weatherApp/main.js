const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = 'API_KEY'; // can not push my api key

const mainSection = document.getElementsByClassName('mainSection')[0];
const searchBox = document.getElementById('searchBox');
const searchIcon = document.getElementById('searchIcon');
const loader = document.getElementById('loader');

function enableLoader(){
    loader.style.display = 'block';
}

function disableLoader(){
    loader.style.display = 'none';
}

async function getWeatherData(city){
    try {
        enableLoader();
        mainSection.innerHTML = '';
        const response = await fetch(BASE_URL + city + '&units=metric&appid=' + API_KEY);
        const data = await response.json();
        disableLoader();
        displayWeatherData(data);
        searchBox.value = '';
    }
    catch(e){
        alert('Invalid Search Keyword')
        return;
    }
}

getWeatherData('Noida').then(() => console.log('promise resolved'));

function displayWeatherData(data){
    console.log(data)
    mainSection.innerHTML = `
        <div class="weather">
            <h5 id="placeName">${data.name + ', ' + data.sys.country}</h5>
            <h1 id="temperature" style="position: relative;">${parseInt(data.main.temp)}</h1>
            <h5 id="feelsLike">Feels Like ${parseInt(data.main.feels_like)}&deg;</h5>
        </div>
        <div class="weatherIcon">
            <img id="iconWeather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="95">
            <h5 id="weatherText" style="text-align: center;">${data.weather[0].main}</h5>
        </div>
    `
}

searchIcon.onclick = () => {
    getWeatherData(searchBox.value);
}
