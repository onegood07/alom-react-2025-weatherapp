import { CurrentWeatherWrapper, Temperature, WeatherCode } from "./styles/StyledComponents";
import { formatCurrentData } from "../utils/formatWeatherData";
import { fetchCurrentData } from "../utils/fetchWeatherData";
import { DEGREE_CELSIUS } from "../constants/uiConstants";

const CurrentWeather = ({ weatherData }) => {
  const currentData = formatCurrentData(fetchCurrentData(weatherData));

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
