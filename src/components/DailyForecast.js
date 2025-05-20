import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { formatDailyData } from "../utils/formatWeatherData";
import { fetchDailyData } from "../utils/fetchWeatherData";
import { DEGREE_CELSIUS } from "../constants/uiConstants";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(fetchDailyData(weatherData));

  return (
    <DailyForecastWrapper>
      {dailyData.map((data) => (
        <DailyItem key={data.time}>
          <div>{data.date}</div>
          <div>{data.weatherCode}</div>
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
