async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "3460883db6a32c11188b777ce6fa5d10";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Debug (VERY useful)
    console.log(data);

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    const weatherHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherResult").innerHTML =
      "Error fetching data!";
  }
}