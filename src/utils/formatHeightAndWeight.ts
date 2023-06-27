export const formatMeasurements = (numToFormat: number): string => {
  let result = numToFormat.toString();
  result =
    (result.length > 1 ? "" : "0") +
    result.slice(0, -1) +
    "." +
    result.slice(-1);
  return result;
};
