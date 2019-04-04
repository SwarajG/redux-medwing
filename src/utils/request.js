import { baseUrl, headers, methods } from './enums';

const getAllLocations = () => fetch(`${baseUrl}/locations`);

const createLocation = location => fetch(`${baseUrl}/locations`, {
  method: methods.POST,
  ...headers,
  body: JSON.stringify(location)
});

const editLocation = location => fetch(`${baseUrl}/locations`, {
  method: methods.PUT,
  ...headers,
  body: JSON.stringify(location)
});

const deleteLocation = locationId => fetch(`${baseUrl}/locations/${locationId}`, {
  method: methods.DELETE,
});

const fetchAddressForLatLong = (lat, lng) => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_MAP_KEY}`);

export {
  getAllLocations,
  createLocation,
  editLocation,
  deleteLocation,
  fetchAddressForLatLong
}