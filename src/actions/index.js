import shortid from 'shortid';

export const deleteLocationFromList = id => ({
  type: 'DELETE_LOCATION',
  id
});

export const locationFetch = locations => ({
  type: 'LOCATIONS_FETCHED',
  locations
});

export const addLocation = () => ({
  type: 'ADD_LOCATION',
  location: {
    id: shortid.generate(),
    placeId: '',
    lat: '',
    lng: '',
    address: 'New Address',
    name: 'Draft mode',
    isDraftModeOn: true
  }
});

export const updateLocation = (id, location) => ({
  type: 'UPDATE_LOCATION',
  id,
  location
});

export const createLocationToLocal = (oldId, location) => ({
  type: 'CREATE_LOCATION_ON_SERVER',
  id: oldId,
  location,
  isDraftModeOn: false
});

export const setEditModeOn = id => ({
  type: 'SET_EDIT_MODE_ON',
  id,
  isDraftModeOn: true
});

export const failedToCreateLocation = id => ({
  type: 'FAILED_TO_CREATE_LOCATION',
  id
});

export const updateSearchAddress = address => ({
  type: 'UPDATE_SEARCH_ADDRESS',
  address
})