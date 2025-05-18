import { CurrentWeatherWrapper, Temperature, WeatherCode } from "./styles/StyledComponents";
import { getWeatherDescription, formatCurrentData } from "../utils/weather";
import { DEGREE_CELSIUS, LOADING } from "../constants/uiConstants";

const CurrentWeather = ({ weatherData, isLoading }) => {
  const currentData = formatCurrentData(weatherData);

  if (isLoading) {
    return <div>{LOADING}</div>;
  }

  return (
    <CurrentWeatherWrapper>
      <Temperature>
        {currentData.temperature}
        {DEGREE_CELSIUS}
      </Temperature>
      <WeatherCode>{getWeatherDescription(currentData.weatherCode)}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
