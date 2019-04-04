import React, { Component } from 'react';
import { defaultLng, defaultLat } from '../utils/enums';
import Map from '../components/Map';

class MapView extends Component {
  onDragEnd = (e) => {
    const isDraftModeOn = this.props.locations.find(location => location.isDraftModeOn);
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    if (isDraftModeOn) {
      this.props.updateLocation(isDraftModeOn.id, lat, lng);
    }
  }

  onMapClick = (e) => {
    const isDraftModeOn = this.props.locations.find(location => location.isDraftModeOn);
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    if (isDraftModeOn) {
      this.props.updateLocation(isDraftModeOn.id, lat, lng);
    }
  }

  render() {
    const { locations } = this.props;
    const hasLocations = locations.length > 0;
    const firstLat = hasLocations && locations[0].lat;
    const firstLng = hasLocations && locations[0].lng;
    const lat = firstLat || defaultLat;
    const lng = firstLng || defaultLng;
    const mapWidth = window.innerWidth / 2 - 40;
    return (
      <Map
        onDragEnd={this.onDragEnd}
        onClick={this.onMapClick}
        locations={locations}
        defaultLat={lat}
        defaultLng={lng}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.REACT_APP_MAP_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '80vh' }} />}
        mapElement={<div style={{ height: `100%`, width: `${mapWidth}px` }} />}
      />
    );
  }
}

export default MapView;
