import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import * as GeosActions from '../actions/GeosActions';
import MapRouter from '../components/MapRouter';
import SortableComponent from '../components/GeoList';
import AddGeoInput from '../components/AddGeoInput';
import styles from './MapRouterApp.css';

class MapRouterApp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    const { geolist: { geos, geosById: geosById }, dispatch } = this.props;
    const actions = bindActionCreators(GeosActions, dispatch);

    return (
      <Grid>
        <div className={'map-router'}>
          <Row>
            <Col xs={12} sm={5} md={4}>
              <div className={'map-router__geos'}>
                <AddGeoInput addGeo={actions.addGeo} />
                <SortableComponent
                  geos={geos}
                  geolist={geosById}
                  actions={actions}
                  distance={5}
                  lockAxis="y"
                />
              </div>
            </Col>
            <Col xs={12} sm={7} md={8}>
              <div className={'map-router__map'}>
                <MapRouter
                  geos={geos}
                  geolist={geosById}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}
export default connect(state => {
  return {geolist: state.geolist}
})(MapRouterApp);
