export const isToDay = (dateInData, currentDate) => {
  return (
    dateInData.getFullYear() === currentDate.getFullYear() &&
    dateInData.getMonth() === currentDate.getMonth() &&
    dateInData.getDate() === currentDate.getDate()
  );
};

export const isWithin12Hours = (dateInData, currentDate) => {
  const diff = (dateInData - currentDate) / (1000 * 60 * 60);
  return diff >= 0 && diff <= 12;
};

export const isInCurrentTime = (dateInData) => {
  const now = new Date();

  return (
    dateInData.getFullYear() === now.getFullYear() &&
    dateInData.getMonth() === now.getMonth() &&
    dateInData.getDate() === now.getDate() &&
    dateInData.getHours() === now.getHours()
  );
};
