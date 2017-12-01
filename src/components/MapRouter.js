import React, { Component } from 'react';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

class Router extends GeoObject {
  update() {
    return null
  }
  render() {
    const { geos, geolist } = this.props;
    const { ymaps, parent } = this.context
    const getPointType = (currentIndex, arr) => {
      return currentIndex === 0 || currentIndex === arr.length - 1 ? 'wayPoint' : 'viaPoint'
    }
    parent.geoObjects.removeAll()
    ymaps.route(geos.map( (geoId, index, arr) => {
      return { 'type': getPointType(index, arr), 'point': geolist[geoId].name }
    })).then( (route) => {
      parent.geoObjects.add(route);
    }, (error) => {
      throw "Возникла ошибка: " + error.message;
    })
    return null
  }
}

class MapRouter extends Component {
  render() {
    const { geos, geolist } = this.props
    const centerCoordinates = geos.length > 0 ? geolist[geos.length - 1].point : [55.74954, 37.621587]
    const mapState = { center: centerCoordinates, zoom: 10}
    return (
      <YMaps>
        <Map state={mapState} width="100%">
          <Router {...this.props} />
        </Map>
      </YMaps>
    )
  }
}

export default MapRouter;
