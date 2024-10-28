"use strict";

const key = "b03fc14a2874815903be485d267dac11";

const inputPlace = document.querySelector(".place");
const searchWeather = document.querySelector(".search-btn");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity-percent");
const windSpeedElement = document.querySelector(".wind-speed");
const weatherIcon = document.querySelector(".weatherIcon");
const changeBG = document.querySelector(".main-bg");

const rainIcon =
  "data:image/png;base64,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";

const cloudIcon =
  "data:image/png;base64,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";
const clearIcon =
  "data:image/png;base64,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";
const fetchWeatherAPI = async (place) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}&units=metric`; // Use metric for Celsius
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again.");
  }
};

const updateWeatherInfo = (data) => {
  if (data) {
    const { main, wind, name, weather } = data;
    tempElement.textContent = `${Math.round(main.temp)}°C`;
    cityElement.textContent = name; // Update city name
    humidityElement.textContent = `${main.humidity}%`;
    windSpeedElement.textContent = `${wind.speed} km/h`;

    switch (weatherCondition) {
      case "Clouds":
        weatherIcon.src = cloudIcon;
        changeBG.style.backgroundImage = ""; // Clear current background first
        setTimeout(() => {
          changeBG.style.backgroundImage = `url('./clouds.jpeg')`;
        }, 50);
        break;

      case "Rain":
        weatherIcon.src = rainIcon;
        changeBG.style.backgroundImage = "";
        setTimeout(() => {
          changeBG.style.backgroundImage = `url('./rain.jpeg')`;
        }, 50);
        break;

      case "Clear":
        weatherIcon.src = clearIcon;
        changeBG.style.backgroundImage = "";
        setTimeout(() => {
          changeBG.style.backgroundImage = `url('./clear.jpeg')`;
        }, 50);
        break;

      default:
        weatherIcon.src = "./Default.jpeg";
        changeBG.style.backgroundImage = "";
        setTimeout(() => {
          changeBG.style.backgroundImage = `url('./Default.jpeg')`;
        }, 50);
        break;
    }
  }
};

const lookUpWeather = () => {
  searchWeather.addEventListener("click", async () => {
    const place = inputPlace.value;
    if (place) {
      const weatherData = await fetchWeatherAPI(place);
      updateWeatherInfo(weatherData);
    } else {
      alert("Please enter a city name.");
    }
  });
};

lookUpWeather();
