import React, {  Component } from 'react';
import { Button } from 'antd';
import AutoComplete from '../containers/AutoComplete';
import s from './styles';

export default class LocationView extends Component {
  renderActionsButtons = (deleteLocation, disabled, setEditMode) => (
    <div className={s.actionsWrapper}>
      <Button onClick={setEditMode} disabled={disabled}>
        Edit
      </Button>
      <p className={s.separator}>or</p>
      <Button onClick={deleteLocation} disabled={disabled}>
        Delete
      </Button>
    </div>
  )

  renderDraftActionButton = (deleteLocationFromList, createLocationOnServer, updateLocationOnServer) => (
    <div className={s.actionsWrapper}>
      <Button onClick={this.props.location.isUpdating ? updateLocationOnServer : createLocationOnServer}>
        {this.props.location.isUpdating ? 'Update' : 'Save'}
      </Button>
      <p className={s.separator}>or</p>
      <Button onClick={deleteLocationFromList}>
        Delete
      </Button>
    </div>
  )

  render() {
    const {
      location,
      deleteLocation,
      deleteLocationFromList,
      editLocation,
      createLocationOnServer,
      setEditMode,
      updateLocationOnServer
    } = this.props;
    const disabled = !!editLocation;
    const isCurrentElementEdited = editLocation && (editLocation.id === location.id);
    return (
      <div className={s.locationWrapper}>
        {isCurrentElementEdited && <AutoComplete locationId={location.id} />}
        <p className={s.headerText}>{location.name}</p>
        <p className={s.locationDescription}>{location.address}</p>
        <p className={s.locationDescription}>Latitude: {location.lat}</p>
        <p className={s.locationDescription}>Longitude: {location.lng}</p>
        {editLocation
          && (editLocation.id !== location.id)
          && this.renderActionsButtons(deleteLocation, disabled, setEditMode)
        }
        {!editLocation && this.renderActionsButtons(deleteLocation, disabled, setEditMode)}
        {isCurrentElementEdited
          && this.renderDraftActionButton(deleteLocationFromList, createLocationOnServer, updateLocationOnServer)}
      </div>
    );
  }
}