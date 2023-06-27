export const convertMetersToFeet = (meters: number | string): string => {
  return (+meters * 3.28084).toString();
};
