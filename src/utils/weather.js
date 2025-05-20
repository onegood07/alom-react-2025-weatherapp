import { isValidHourlyData, isInCurrentTime } from "./validators";
import { getWeekdayName } from "./weeks";
import { WEATHER_CODE } from "../constants/weatherCodes";
import { FAILED_LOAD_DATA } from "../constants/errorMessage";
import { errorLog } from "../utils/logger";

export const getWeatherDescription = (code) => {
  return WEATHER_CODE[code] || "알 수 없음";
};

export const formatCurrentData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatCurrentData.name, FAILED_LOAD_DATA);
    return;
  }

  const index = weatherData.hourly.time.findIndex((time) => isInCurrentTime(new Date(time)));
  const date = new Date(weatherData.hourly.time[index]);

  return {
    time: date.toISOString(),
    temperature: Math.floor(weatherData.hourly.temperature_2m[index]),
    weatherCode: weatherData.hourly.weather_code[index],
  };
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatHourlyData.name, FAILED_LOAD_DATA);
    return;
  }
  const currentDate = new Date();
  const collectedForecasts = [];

  weatherData.hourly.time.forEach((time, index) => {
    const hourlyDate = new Date(time);

    if (isValidHourlyData(hourlyDate, currentDate, collectedForecasts)) {
      collectedForecasts.push({
        timeString: hourlyDate.toISOString(),
        hour: hourlyDate.getHours(),
        temperature: Math.floor(weatherData.hourly.temperature_2m[index]),
        weatherCode: weatherData.hourly.weather_code[index],
      });
    }
  });

  return collectedForecasts;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) {
    errorLog(formatDailyData.name, FAILED_LOAD_DATA);
    return;
  }

  const result = weatherData.daily.time.map((time, index) => {
    const dailyDate = new Date(time);

    return {
      timeString: dailyDate.toISOString(),
      date: `${dailyDate.getMonth() + 1}월 ${dailyDate.getDate()}일 (${getWeekdayName(
        dailyDate.getDay()
      )})`,
      temperature: Math.floor(weatherData.daily.temperature_2m_max[index]),
      weatherCode: weatherData.daily.weather_code[index],
    };
  });

  return result;
};
