import React from 'react';
import ReactDOM from 'react-dom';
import { sortable } from 'react-sortable';
import { Glyphicon } from 'react-bootstrap';

const GeoListItem = props => (
  <div {...props}>
    {props.name}
    <a onClick={() => props.deleteGeo(props.id)}><Glyphicon glyph="remove" /></a>
  </div>
)

const SortableItem = sortable(GeoListItem);

export default GeoListItem;
