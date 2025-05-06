function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let resultDiv = document.getElementById("weatherResult");
  
    if (city === "") {
      alert("Please enter a city name!");
      return;
    }
  
    let apiKey = "a73ce77938d3931a0931cdd034443ab0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found!");
        }
        return response.json();
      })
      .then(data => {
        let temp = data.main.temp;
        let weather = data.weather[0].description;
        resultDiv.innerHTML = `Temperature in ${city}: <strong>${temp}°C</strong><br>Condition: <strong>${weather}</strong>`;
      })
      .catch(error => {
        resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
      });
  }
  