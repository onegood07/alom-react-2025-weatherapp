import { getWeekdayDescription, getWeatherDescription } from "./getDescription";

export const formatCurrentData = (weatherData) => {
  return weatherData.map(({ time, temperature, weatherCode }) => ({
    time: time.toISOString(),
    temperature: Math.floor(temperature),
    weatherCode: getWeatherDescription(weatherCode),
  }));
};

export const formatHourlyData = (weatherData) => {
  return weatherData.map(({ time, temperature, weatherCode }) => ({
    time: time.toISOString(),
    hour: time.getHours(),
    temperature: Math.floor(temperature),
    weatherCode: getWeatherDescription(weatherCode),
  }));
};

export const formatDailyData = (weatherData) => {
  return weatherData.map(({ time, temperature, weatherCode }) => ({
    time: time.toISOString(),
    date: `${time.getMonth() + 1}월 ${time.getDate()}일 (${getWeekdayDescription(time.getDay())})`,
    temperature: Math.floor(temperature),
    weatherCode: getWeatherDescription(weatherCode),
  }));
};
