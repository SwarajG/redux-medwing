import { connect } from 'react-redux';
import { updateLocation } from '../reducers/asyncReducers';
import { updateSearchAddress } from '../actions';
import AutoCompleteView from '../components/AutoCompleteView';

const mapDispatchToProps = (dispatch) => ({
  updateLocationOnLocal: (id, lat, lng) => dispatch(updateLocation(id, lat, lng)),
  updateAddress: address => dispatch(updateSearchAddress(address)),
});

export default connect(
  state => ({
    address: state.address
  }),
  mapDispatchToProps
)(AutoCompleteView);