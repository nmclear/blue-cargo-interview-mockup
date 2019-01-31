import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.css';

const SideNav = () => (
  <div style={{ width: '100px' }}>
    <div className="side-nav-container column-flex">
      <div className="nav-btn-container column-flex">
        <NavLink className="nav-btn" exact to="/">
          Y
        </NavLink>
        <NavLink className="nav-btn" to="/blocks">
          B
        </NavLink>
        <NavLink className="nav-btn" exact to="/port">
          P
        </NavLink>
        <NavLink className="nav-btn" exact to="/discharge">
          D
        </NavLink>
      </div>
      <div className="account-btn-container">
        <button className="nav-btn" type="button" onClick={() => {}}>
          A
        </button>
      </div>
    </div>
  </div>
);

export default SideNav;
