import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";
import { DEGREE_CELSIUS } from "../constants/uiConstants";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {dailyData.map((data) => (
        <DailyItem key={data.timeString}>
          <div>{data.date}</div>
          <div>{getWeatherDescription(data.weatherCode)}</div>
          <div>
            {data.temperature}
            {DEGREE_CELSIUS}
          </div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
