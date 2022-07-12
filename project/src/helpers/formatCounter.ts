export const formatCounter = (number: number) => {
  if (number >= 10) {
    return number;
  }
  const numberAsString = String(number);
  const result = numberAsString.padStart(2, "0");
  return result;
};
