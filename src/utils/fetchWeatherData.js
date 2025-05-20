import { isValidHourlyData, isInCurrentTime } from "./validators";
import { FAILED_LOAD_DATA } from "../constants/errorMessage";
import { errorLog } from "../utils/logger";

export const fetchCurrentData = (weatherData) => {
  if (!weatherData) {
    errorLog(fetchCurrentData.name, FAILED_LOAD_DATA);
    return;
  }

  const index = weatherData.hourly.time.findIndex((time) => isInCurrentTime(new Date(time)));

  return {
    time: new Date(weatherData.hourly.time[index]),
    temperature: weatherData.hourly.temperature_2m[index],
    weatherCode: weatherData.hourly.weather_code[index],
  };
};

export const fetchHourlyData = (weatherData) => {
  if (!weatherData) {
    errorLog(fetchHourlyData.name, FAILED_LOAD_DATA);
    return;
  }
  const currentDate = new Date();
  const collectedForecasts = [];

  weatherData.hourly.time.forEach((time, index) => {
    const hourlyDate = new Date(time);

    if (isValidHourlyData(hourlyDate, currentDate, collectedForecasts)) {
      collectedForecasts.push({
        time: hourlyDate,
        temperature: weatherData.hourly.temperature_2m[index],
        weatherCode: weatherData.hourly.weather_code[index],
      });
    }
  });

  return collectedForecasts;
};

export const fetchDailyData = (weatherData) => {
  if (!weatherData) {
    errorLog(fetchDailyData.name, FAILED_LOAD_DATA);
    return;
  }

  const collectedForecasts = weatherData.daily.time.map((time, index) => {
    const dailyDate = new Date(time);

    return {
      time: new Date(time),
      temperature: weatherData.daily.temperature_2m_max[index],
      weatherCode: weatherData.daily.weather_code[index],
    };
  });

  return collectedForecasts;
};
