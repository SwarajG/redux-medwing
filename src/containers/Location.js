import { connect } from 'react-redux';
import {
  deleteLocationFromServer,
  createLocation
} from '../reducers/asyncReducers';
import {
  deleteLocationFromList,
  setEditModeOn
} from '../actions';
import LocationView from '../components/LocationView';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createLocationOnServer: () => dispatch(createLocation(ownProps.location)),
  deleteLocation: () => dispatch(deleteLocationFromServer(ownProps.location.id)),
  deleteLocationFromList: () => dispatch(deleteLocationFromList(ownProps.location.id)),
  setEditMode: () => dispatch(setEditModeOn(ownProps.location.id))
});

export default connect(
  state => state,
  mapDispatchToProps
)(LocationView);