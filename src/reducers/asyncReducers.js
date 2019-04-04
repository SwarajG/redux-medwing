import {
  getAllLocations,
  deleteLocation,
  createLocation as createLocationOnServer,
  fetchAddressForLatLong
} from '../utils/request';
import {
  locationFetch,
  deleteLocationFromList,
  createLocationToLocal,
  updateLocation as updateLocationDetails,
  failedToCreateLocation
} from '../actions';
import { message } from 'antd';

export function fetchLocationsFromServer() {
  return function (dispatch) {
    return getAllLocations()
    .then(response => response.json())
    .then(response => dispatch(locationFetch(response)));
  }
}

export function deleteLocationFromServer(id) {
  return function (dispatch) {
    return deleteLocation(id)
    .then(() => dispatch(deleteLocationFromList(id)));
  }
}

export function createLocation(location) {
  const { id, ...rest } = location;
  if (!location.lat && !location.lng) {
    message.error('Latitude and Longitude can not be empty...');
    return function (dispatch) {
      dispatch(failedToCreateLocation(id))
    };
  }
  return function (dispatch) {
    return createLocationOnServer(rest)
    .then(response => response.json())
    .then(response => dispatch(createLocationToLocal(id, response)));
  }
}

export function updateLocation(id, lat, lng) {
  return function (dispatch) {
    return fetchAddressForLatLong(lat, lng)
    .then(response => response.json())
    .then((response) => {
      let locationObject = {};
      if (response.results.length > 0) {
        locationObject = response.results[0];
      } else {
        locationObject = {
          id,
          place_id: null,
          formatted_address: 'Unknown address'
        };
      }
      const { formatted_address, place_id } = locationObject;
      const location = {
        id,
        placeId: place_id,
        address: formatted_address,
        name: formatted_address,
        lat,
        lng
      };
      dispatch(updateLocationDetails(id, location))
    });
  }
}