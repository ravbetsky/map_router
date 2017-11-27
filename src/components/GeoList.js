import React, { Component } from 'react';
import GeoListItem from './GeoListItem';
import { map } from 'lodash';

class GeoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggingIndex: null,
      data: this.props.geos
    };
  }
  render() {
    const { draggingIndex, data } = this.state
    return (
      <div>
        {
          map(this.props.geolist, (geo) => {
            return (
              <GeoListItem
                key={geo.id}
                sortId={geo.id}
                id={geo.id}
                items={data}
                outline="list"
                draggingIndex={draggingIndex}
                name={geo.name}
                {...this.props.actions} />
            );
          })
        }
      </div>
    )
  }
}

export default GeoList;
