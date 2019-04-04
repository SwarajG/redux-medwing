import { connect } from 'react-redux';
import { updateLocation } from '../reducers/asyncReducers';
import MapView from '../components/MapView';

const mapDispatchToProps = (dispatch) => ({
  updateLocation: (id, lat, lng) => dispatch(updateLocation(id, lat, lng))
});

export default connect(
  state => ({
    locations: state.locations
  }),
  mapDispatchToProps
)(MapView);
