import { WEEKDAYS } from "../constants/weekdays";

export const getWeekdayName = (dayIndex) => {
  return WEEKDAYS[dayIndex] || "알 수 없음";
};
