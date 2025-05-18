import { isToDay, isWithin12Hours, isInCurrentTime } from "./validators";
import { getWeekdayName } from "./weeks";

export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatCurrentData = (weatherData) => {
  if (!weatherData) return;

  const index = weatherData.hourly.time.findIndex((time) => isInCurrentTime(new Date(time)));
  const date = new Date(weatherData.hourly.time[index]);

  return {
    time: date.toISOString(),
    temperature: Math.floor(weatherData.hourly.temperature_2m[index]),
    weatherCode: weatherData.hourly.weather_code[index],
  };
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  const currentDate = new Date();
  const result = [];

  weatherData.hourly.time.forEach((time, index) => {
    const hourlyDate = new Date(time);

    if (
      isToDay(hourlyDate, currentDate) &&
      isWithin12Hours(hourlyDate, currentDate) &&
      result.length < 12
    ) {
      result.push({
        timeString: hourlyDate.toISOString(),
        hour: hourlyDate.getHours(),
        temperature: Math.floor(weatherData.hourly.temperature_2m[index]),
        weatherCode: weatherData.hourly.weather_code[index],
      });
    }
  });

  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

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
