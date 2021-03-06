import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MapGL, { Marker } from "react-map-gl";

import Menu from "../../components/Menu";
import Modal from "../../components/Modal";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UserActions } from "../../store/ducks/users";

import "mapbox-gl/dist/mapbox-gl.css";

class Main extends Component {
  static propTypes = {
    onOpenModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      open: PropTypes.bool
    }).isRequired
  };
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    const [latitude, longitude] = e.lngLat;

    //alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    this.props.onOpenModal([latitude, longitude]);
  };

  handleMapShowUser = () => {
    console.log("Clicked on user");
  };

  render() {
    return (
      <Fragment>
        <div style={{ position: "absolute", zIndex: 1000 }}>
          <Menu />
          {this.props.modal.open && <Modal />}
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
              background: this.props.modal.open && "#000000ab",
              height: "100%",
              width: "100%",
              zIndex: 2000
            }}
          />
          {this.props.users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.latitude}
              longitude={user.longitude}
              onClick={() => this.handleMapShowUser()}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={user.avatar}
                alt=""
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions, ModalActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
