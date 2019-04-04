import React from 'react';
import Location from '../containers/Location';
import s from './styles';

const LocationList = ({ locations, editLocation }) => (
  <div className={s.locationContainer}>
    {
      locations.map(location => (
        <Location
          location={location}
          key={location.id}
          editLocation={editLocation}
        />
      ))
    } 
  </div>
)

export default LocationList;