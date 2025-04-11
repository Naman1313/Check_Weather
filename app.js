const apiKey = "17a1eec284668a2366182c293ac34c29";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
        const searchBox = document.querySelector(".inputfield input")
        const searchBtn = document.querySelector(".icon button")
        async function checkWeather(city){
            const response = await fetch(apiUrl + `&q=${city}`);
            let data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humvalue").innerHTML = data.main.humidity + "%";
            document.querySelector(".windvalue").innerHTML = data.wind.speed + " Km/h";
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
        searchBox.addEventListener('keypress',(e)=>{
            if(e.key == "Enter")
            checkWeather(searchBox.value);
        })