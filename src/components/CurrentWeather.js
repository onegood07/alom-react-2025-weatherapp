import { CurrentWeatherWrapper, Temperature, WeatherCode } from "./styles/StyledComponents";
import { formatCurrentData } from "../utils/formatWeatherData";
import { fetchCurrentData } from "../utils/fetchWeatherData";
import { DEGREE_CELSIUS, LOADING } from "../constants/uiConstants";

const CurrentWeather = ({ weatherData, isLoading }) => {
  const currentData = formatCurrentData(fetchCurrentData(weatherData));

  if (isLoading) {
    return <div>{LOADING}</div>;
  }

  return (
    <CurrentWeatherWrapper>
      <Temperature>
        {currentData.temperature}
        {DEGREE_CELSIUS}
      </Temperature>
      <WeatherCode>{currentData.weatherCode}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
