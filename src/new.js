let weatherForm = document.querySelector("#weather-form");
let cityInput = document.querySelector("#search-text-input");
let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";

function search(event) {
  event.preventDefault();
  let city = cityInput.value;
  if (city) {
    let tempData = getTemperatureData(city);
    displayTemperature(tempData);
  }
}

weatherForm.addEventListener("submit", search);

function getTemperatureData(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let cityDisplay = document.querySelector("h1");
  cityDisplay.innerHTML = city;
  let tempDisplay = document.querySelector("#update-temperature");
  tempDisplay.innerHTML = temperature;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
let now = new Date();

let p = document.querySelector("#dates");

p.innerHTML = formatDate(now);
