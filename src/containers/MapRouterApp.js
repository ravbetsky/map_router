import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import * as GeosActions from '../actions/GeosActions';
import MapRouter from '../components/MapRouter';
import SortableComponent from '../components/GeoList';
import AddGeoInput from '../components/AddGeoInput';
import style from 'bootstrap/dist/css/bootstrap.css';

class MapRouterApp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { geolist: { geos, geosById: geosById }, dispatch } = this.props;
    const actions = bindActionCreators(GeosActions, dispatch);

    return (
      <div>
        <Col xs={12} md={4}>
          <AddGeoInput addGeo={actions.addGeo} />
          <SortableComponent
            geos={geos}
            geolist={geosById}
            actions={actions}
            distance={5}
            lockAxis="y"
          />
        </Col>
        <Col xs={12} md={8}>
          <MapRouter
            geos={geos}
            geolist={geosById}
          />
        </Col>
      </div>
    );
  }
}
export default connect(state => {
  return {geolist: state.geolist}
})(MapRouterApp);
