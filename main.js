

const apiKey = "b21613644e2d0c780c08fc6b6ac1fb4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searcBox = document.querySelector(".search input");
const searcBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (respone.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await respone.json();


        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "image/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "image/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "image/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "image/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "image/mist.png"
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}
searcBtn.addEventListener("click", () => {
    checkWeather(searcBox.value)
})
