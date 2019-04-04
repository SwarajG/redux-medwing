import { connect } from 'react-redux';
import LocationList from '../components/LocationList';

const mapStateToProps = (state) =>  ({
  editLocation: state.locations.find(location => location.isDraftModeOn),
  address: state.address
});

export default connect(
  mapStateToProps
)(LocationList);