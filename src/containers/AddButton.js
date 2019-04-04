
import { connect } from 'react-redux';
import { addLocation } from '../actions';
import AddButtonView from '../components/AddButtonView';

const mapDispatchToProps = (dispatch, ownProps) => ({
  addLocation: () => dispatch(addLocation())
});

export default connect(
  state => state,
  mapDispatchToProps
)(AddButtonView);