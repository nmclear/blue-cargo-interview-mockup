import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Tooltip from '@material-ui/core/Tooltip';
import PlaceIcon from '@material-ui/icons/Place';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Marker = ({ vessel }) => (
  <div>
    <Tooltip title={vessel} placement="top">
      <PlaceIcon fontSize="large" />
    </Tooltip>
  </div>
);

class PortCallMap extends Component {
  state = {
    safeToRenderMarkers: false,
  };

  renderMarkers = () => {
    const { vessels } = this.props;

    return vessels.map(({ id, vessel, location }) => {
      const { lat, lng } = location;

      return <Marker key={id} lat={lat} lng={lng} vessel={vessel} />;
    });
  };

  render() {
    const { safeToRenderMarkers } = this.state;
    return (
      <div className="port-map-container" style={{ width: '100%', height: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={{
            lat: 33.7542,
            lng: -118.2165,
          }}
          defaultZoom={9}
          onGoogleApiLoaded={() => this.setState({ safeToRenderMarkers: true })}
        >
          {safeToRenderMarkers && this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default PortCallMap;
