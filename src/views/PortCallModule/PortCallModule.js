import React from 'react';

import PortCallTable from '../../components/_charts/PortCallTable';
import PortCallMap from '../../components/PortCallMap';

import PORT_CALL_DATA from '../../constants/port_call_data';

import './style.css';

const PortCallModule = () => (
  <div className="port-module-container row-flex-wrap">
    <div className="column-one column-flex">
      <h1>Port Call Predictive Monitoring</h1>
      <PortCallTable portData={PORT_CALL_DATA} />
      <div className="file-upload-container column-flex flex-center">
        <p>BAPLIE IMPORT</p>
        <form encType="multipart/form-data" action="/upload/file" method="post">
          <input type="file" accept=".edi" />
        </form>
      </div>
    </div>
    <div className="column-two map-container">
      <PortCallMap vessels={PORT_CALL_DATA} />
    </div>
  </div>
);

export default PortCallModule;
