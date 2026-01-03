const Key = "f7d3e6054b97a7be75499b541a4dfc29";

function getWeather(){
    const city = document.getElementById("city").value.trim();
    if(!city){
        alert("Enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`)
    .then(res => res.json())
    .then(data => {
        if(data.cod !== 200){
            result.innerHTML = "<div class='notfound'>City not found </div>";
            return;
        }

        result.innerHTML = `
          
                <h3>${data.name}</h3>
               <div class="data">
                <h2 class="temp">${Math.round(data.main.temp)}°C</h2>
                <p>${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} km/h</p>
            </div>
        `;
    })
    .catch(()=>{
        result.innerHTML="<div class='data'>Error fetching data </div>";
    });
}