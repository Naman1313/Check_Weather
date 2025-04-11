const apiKey = "17a1eec284668a2366182c293ac34c29";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
        const searchBox = document.querySelector(".inputfield input")
        const searchBtn = document.querySelector(".icon button")
        const weatherIcon = document.querySelector(".weatherIcon")

        async function checkWeather(city){
            const response = await fetch(apiUrl + `&q=${city}`);

            if(response.status==404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                let data = await response.json();
                console.log(data);
    
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humvalue").innerHTML = data.main.humidity + "%";
                document.querySelector(".windvalue").innerHTML = data.wind.speed + " Km/h";
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src="images/clouds.png"
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src="images/clear.png"
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src="images/drizzle.png"
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src="images/mist.png"
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src="images/rain.png"
                }
                else if(data.weather[0].main == "Snow"){
                    weatherIcon.src="images/snow.png"
                }
    
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
            
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        searchBox.addEventListener('keypress',(e)=>{
            if(e.key == "Enter")
            checkWeather(searchBox.value);
        })