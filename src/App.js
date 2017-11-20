import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MyMap from './MyMap';
import Search from './Search';
import style from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={4}>
          <Search />
        </Col>
        <Col xs={12} md={8}>
          <MyMap />
        </Col>
      </div>
    );
  }
}

export default App;
