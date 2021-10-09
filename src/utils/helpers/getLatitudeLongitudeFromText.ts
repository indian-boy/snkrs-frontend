export const GetLatitudeLongitudeFromText = (text: string) => {
  const [latitudeFromSearchTerm, longitudeFromSearchTerm] = text
    .replaceAll(/\s/g, '')
    .split(',');

  const validateCordinate = /^-?[\d]{1,3}[.][\d]+$/;

  const isLatitudeValid = validateCordinate.test(latitudeFromSearchTerm);
  const isLongitudeValid = validateCordinate.test(longitudeFromSearchTerm);

  if (!isLatitudeValid || !isLongitudeValid) {
    return {
      latitude: null,
      longitude: null,
    };
  }

  const latitude = parseFloat(latitudeFromSearchTerm);
  const longitude = parseFloat(longitudeFromSearchTerm);

  return {
    latitude,
    longitude,
  };
};
