import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapGL, { Marker } from 'react-map-gl';

import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

import 'mapbox-gl/dist/mapbox-gl.css';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    userInput: '',
    openModal: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = e => {
    const [latitude, longitude] = e.lngLat;

    //alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    this.setState({ openModal: true });
  };

  handleMapShowUser = () => {
    console.log('Clicked on user');
  };

  render() {
    return (
      <Fragment>
        <div style={{ position: 'absolute', zIndex: 1000 }}>
          <Menu />
          {this.state.openModal ? <Modal /> : null}
        </div>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoibWF1cmljaW9ibHVtIiwiYSI6ImNqdTY3c21mdDFncjY0NHBkcmlqanl3dWMifQ.HED_ZMvSPisbM6qo5cMgDw"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <div
            style={{
              background: this.state.openModal ? '#000000ab' : 'none',
              height: '100%',
              width: '100%',
              zIndex: 2000,
            }}
          />
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapShowUser}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);
