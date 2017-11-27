import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import * as GeosActions from '../actions/GeosActions';
import MapRouter from '../components/MapRouter';
import GeoList from '../components/GeoList';
import AddGeoInput from '../components/AddGeoInput';
import style from 'bootstrap/dist/css/bootstrap.css';

class MapRouterApp extends Component {
  static propTypes = {
    geosById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { geos, geolist: { geosById: geosById }, dispatch } = this.props;
    const actions = bindActionCreators(GeosActions, dispatch);

    return (
      <div>
        <Col xs={12} md={4}>
          <AddGeoInput addGeo={actions.addGeo} />
          <GeoList geos={geos} geolist={geosById} actions={actions} />
        </Col>
        <Col xs={12} md={8}>
          <MapRouter />
        </Col>
      </div>
    );
  }
}
export default connect(state => {
  return {geolist: state.geolist}
})(MapRouterApp);
