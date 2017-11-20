import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MapRouter from './MapRouter';
import AddGeoInput from './AddGeoInput';
import style from 'bootstrap/dist/css/bootstrap.css';

class MapRouterApp extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={4}>
          <AddGeoInput />
        </Col>
        <Col xs={12} md={8}>
          <MapRouter />
        </Col>
      </div>
    );
  }
}

export default MapRouterApp;
