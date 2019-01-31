import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class DropdownMenu extends Component {
  state = {
    menuVisible: false,
  };

  showMenu = () => this.setState({
    menuVisible: true,
  });

  hideMenu = () => this.setState({
    menuVisible: false,
  });

  // added for mobile devices since no hover on mobile
  toggleMenu = () => this.setState({
    menuVisible: !this.state.menuVisible,
  });

  getToLink = (id) => {
    const { menuType } = this.props;
    if (menuType === 'BLOCK') {
      return {
        pathname: '/blocks',
        state: { activeBlockId: id },
      };
    }
    return {
      pathname: '/discharge',
      state: { activeVesselId: id },
    };
  };

  render() {
    const { menuVisible } = this.state;
    const { data, activeItem, menuType } = this.props;

    return (
      <div className="dropdown" onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
        <button onClick={this.toggleMenu} type="button" className="dropdown-btn">
          {menuType === 'BLOCK' ? `Block ${activeItem.name}` : `Vessel - ${activeItem.vessel}`}
          <i className="down" />
        </button>
        <div
          className="dropdown-menu"
          style={menuVisible ? { display: 'block' } : { display: 'none' }}
        >
          {data.map(({ id, name, vessel }) => (
            <Link key={id} to={this.getToLink(id)}>
              {menuType === 'BLOCK' ? name : vessel}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
