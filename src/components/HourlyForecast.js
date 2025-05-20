import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { formatHourlyData } from "../utils/formatWeatherData";
import { fetchHourlyData } from "../utils/fetchWeatherData";
import { DEGREE_CELSIUS, HOUR_SUFFIX } from "../constants/uiConstants";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(fetchHourlyData(weatherData));

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((data) => (
        <div key={data.time}>
          <HourlyItem>
            {data.hour}
            {HOUR_SUFFIX}
          </HourlyItem>
          <HourlyItem>
            {data.temperature}
            {DEGREE_CELSIUS}
          </HourlyItem>
          <HourlyItem>{data.weatherCode}</HourlyItem>
        </div>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
