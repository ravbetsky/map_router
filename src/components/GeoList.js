import React, { Component } from 'react';
import GeoListSortableItem from './GeoListItem';
import { SortableContainer } from 'react-sortable-hoc';

class GeoList extends Component {
  render() {
    const { items, geos} = this.props
    return (
      <div>
        {
          geos.map( (idx, index) => {
            const geo = this.props.geolist[idx]
            return (
              <GeoListSortableItem
                key={idx}
                id={idx}
                index={index}
                name={geo.name}
                actions={this.props.actions}
              />
            );
          })
        }
      </div>
    )
  }
}

const GeoListSortable = SortableContainer(GeoList)

class SortableComponent extends Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.actions.sortGeoList(oldIndex, newIndex)
  };
  render() {
    return <GeoListSortable onSortEnd={this.onSortEnd} {...this.props}/>;
  }
}

export default SortableComponent;
