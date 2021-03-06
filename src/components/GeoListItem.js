import React, { Component } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { Glyphicon } from 'react-bootstrap';

class GeoListItem extends Component {
  handleDelete = () => {
    this.props.actions.deleteGeo(this.props.id)
  }
  render() {
    return (
      <div className={'map-router__geo'}>
        {this.props.name}
        <Glyphicon glyph="remove" onClick={this.handleDelete}/>
      </div>
    )
  }
}

const GeoListSortableItem = SortableElement(GeoListItem)

export default GeoListSortableItem;
