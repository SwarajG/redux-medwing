import { combineReducers } from 'redux';

import locations from './locations';
import locationSearch from './locationSearch';

export default combineReducers({
  locations,
  address: locationSearch
});