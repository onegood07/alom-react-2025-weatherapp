import { getWeekdayDescription, getWeatherDescription } from "./getDescription";
import { FAILED_LOAD_DATA } from "../constants/errorMessage";
import { errorLog } from "../utils/logger";

export const formatCurrentData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatCurrentData.name, FAILED_LOAD_DATA);
    return null;
  }

  return {
    time: new Date(weatherData.time).toISOString(),
    temperature: Math.floor(weatherData.temperature),
    weatherCode: getWeatherDescription(weatherData.weatherCode),
  };
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatHourlyData.name, FAILED_LOAD_DATA);
    return null;
  }

  return weatherData.map(({ time, temperature, weatherCode }) => {
    const date = new Date(time);
    return {
      time: date.toISOString(),
      hour: date.getHours(),
      temperature: Math.floor(temperature),
      weatherCode: getWeatherDescription(weatherCode),
    };
  });
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatDailyData.name, FAILED_LOAD_DATA);
    return null;
  }

  return weatherData.map(({ time, temperature, weatherCode }) => {
    const date = new Date(time);

    return {
      time: date.toISOString(),
      date: `${date.getMonth() + 1}월 ${date.getDate()}일 (${getWeekdayDescription(
        date.getDay()
      )})`,
      temperature: Math.floor(temperature),
      weatherCode: getWeatherDescription(weatherCode),
    };
  });
};
