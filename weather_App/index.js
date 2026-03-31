const apiKey ="YOUR_NEW_API_KEY";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humudity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "clouds.png";
    } 
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "clear.png";
    } 
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "rain.png";
    } 
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } 
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "mist.png";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
});
