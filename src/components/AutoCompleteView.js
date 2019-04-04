import React, { Component } from 'react';
import { message } from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import s from './styles';

class AutoCompleteView extends Component {
  handleErrorState = (errorCode) => {
    switch (errorCode) {
      case 'ZERO_RESULTS':
        message.warning('Can not find any results with given name, Please drop your location on the map by clicking on the location...');
        break;
      case 'OVER_QUERY_LIMIT':
        message.warning('Query exceeded the limit...');
        break;
      case 'INVALID_REQUEST':
        message.warning('Invalid request...');
        break;
      case 'UNKNOWN_ERROR':
        message.warning('Unknown error...');
        break;
      default:
        break;
    }
  }
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.updateLocationOnLocal(this.props.locationId, latLng.lat, latLng.lng))
      .catch(error => this.handleErrorState(error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
        onChange={this.props.updateAddress}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places...',
                className: s.searchInput,
              })}
            />
            <div className={s.autocompleteContainer}>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? `${s.suggestionActive}`
                  : `${s.suggestionItem}`;
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default AutoCompleteView;