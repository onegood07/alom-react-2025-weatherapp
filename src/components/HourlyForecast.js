import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";
import { DEGREE_CELSIUS, HOUR_SUFFIX } from "../constants/uiConstants";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((data) => (
        <div key={data.timeString}>
          <HourlyItem>
            {data.hour}
            {HOUR_SUFFIX}
          </HourlyItem>
          <HourlyItem>
            {data.temperature}
            {DEGREE_CELSIUS}
          </HourlyItem>
          <HourlyItem>{getWeatherDescription(data.weatherCode)}</HourlyItem>
        </div>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
