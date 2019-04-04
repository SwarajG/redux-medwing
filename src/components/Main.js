import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocationsFromServer } from '../reducers/asyncReducers';
import MapWrapper from '../containers/MapWrapper';
import AddButton from '../containers/AddButton';
import LocationList from '../containers/List';
import s from './styles';


class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLocationsFromServer());
  }

  render() {
    const { locations} = this.props;
    const isAddDisabled = !!locations.find(location => location.isDraftModeOn);
    return (
      <div className={s.wrapper}>
        <div className={s.childClass}>
          <MapWrapper />
        </div>
        <div className={s.childClass}>
          <AddButton disabled={isAddDisabled} />
          <LocationList locations={locations} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    locations: state.locations
  })
)(Main);