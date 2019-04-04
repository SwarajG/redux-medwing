const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        action.location
      ];
    case 'CREATE_LOCATION_ON_SERVER':
      return state.map((location) => {
        if (action.id === location.id) {
          return {
            ...action.location,
            isDraftModeOn: action.isDraftModeOn,
            isUpdating: action.isUpdating
          }
        }
        return location;
      });;
    case 'UPDATE_LOCATION':
      return state.map((location) => {
        if (action.id === location.id) {
          return {
            ...location,
            ...action.location
          }
        }
        return location;
      });
    case 'DELETE_LOCATION':
      return state.filter(loaction => loaction.id !== action.id);
    case 'LOCATIONS_FETCHED':
      return [
        ...state,
        ...action.locations
      ];
    case 'UPDATE_LOCATION_ON_SERVER':
      return state.map((location) => {
        if (action.id === location.id) {
          return {
            ...location,
            isDraftModeOn: action.isDraftModeOn,
            isUpdating: action.isUpdating
          }
        }
        return location;
      });
    case 'SET_EDIT_MODE_ON':
      return state.map((location) => {
        if (action.id === location.id) {
          return {
            ...location,
            isDraftModeOn: action.isDraftModeOn,
            isUpdating: action.isUpdating
          }
        }
        return location;
      });
    case 'FAILED_TO_CREATE_LOCATION':
      return state;
    default:
      return state;
  }
};

export default locations;