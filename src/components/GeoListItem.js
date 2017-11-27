import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SortableElement } from 'react-sortable-hoc';
import { Glyphicon } from 'react-bootstrap';

class GeoListItem extends Component {
  handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.props.actions.deleteGeo(this.props.id)
  }
  render() {
    return (
      <div>
        {this.props.name}
        <a onClick={this.handleDelete}><Glyphicon glyph="remove" /></a>
      </div>
    )
  }
}

const GeoListSortableItem = SortableElement(GeoListItem)

export default GeoListSortableItem;
