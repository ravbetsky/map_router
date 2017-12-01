import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SortableElement } from 'react-sortable-hoc';
import { Glyphicon } from 'react-bootstrap';

class GeoListItem extends Component {
  handleDelete = () => {
    this.props.actions.deleteGeo(this.props.id)
  }
  render() {
    return (
      <div>
        {this.props.name}
        <Glyphicon glyph="remove" onClick={this.handleDelete}/>
      </div>
    )
  }
}

const GeoListSortableItem = SortableElement(GeoListItem)

export default GeoListSortableItem;
