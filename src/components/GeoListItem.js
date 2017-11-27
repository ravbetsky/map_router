import React from 'react';
import ReactDOM from 'react-dom';
import { Glyphicon } from 'react-bootstrap';

const GeoListItem = props => (
  <div>
    {props.name}
    <a onClick={() => props.deleteGeo(props.id)}><Glyphicon glyph="remove" /></a>
  </div>
)
export default GeoListItem;
