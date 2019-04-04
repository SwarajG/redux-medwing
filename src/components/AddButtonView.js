import React from 'react';
import { Button } from 'antd';

function AddButtonView({ addLocation, disabled = false }) {
  return (
    <Button onClick={addLocation} disabled={disabled} type="primary">
      Add Map
    </Button>
  );
}

export default AddButtonView;