import { WEEKDAYS } from "../constants/weekdays";
import { WEATHER_CODE } from "../constants/weatherCodes";

export const getWeekdayNameDescription = (dayIndex) => {
  return WEEKDAYS[dayIndex] || "알 수 없음";
};

export const getWeatherDescription = (code) => {
  return WEATHER_CODE[code] || "알 수 없음";
};
