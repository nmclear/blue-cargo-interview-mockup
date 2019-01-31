import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideNav from './components/SideNav';
import YardModule from './views/YardModule';
import BlockModule from './views/BlockModule';
import PortCallModule from './views/PortCallModule';
import DischargeModule from './views/DischargeModule';

import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <SideNav />
      <div className="router-container">
        <Switch>
          <Route exact path="/" component={YardModule} />
          <Route exact path="/blocks" component={BlockModule} />
          <Route exact path="/port" component={PortCallModule} />
          <Route exact path="/discharge" component={DischargeModule} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
