export const addLeadingZeros = (num: number) => {
  const length = num.toString().length;
  if (length < 3) {
    return "0".repeat(3 - length) + num;
  }
  return num;
};
