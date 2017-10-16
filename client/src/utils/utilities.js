export const getDateString = (timestamp) => {
  const dateCast = new Date(timestamp);
  return `${dateCast.getMonth() + 1}/${dateCast.getDate()}/${dateCast.getFullYear()} at  ${('0' + dateCast.getHours()).slice(-2)}:${('0' + dateCast.getMinutes()).slice(-2)}:${('0' + dateCast.getSeconds()).slice(-2)}`;
}