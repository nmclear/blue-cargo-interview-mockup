import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const getBlockColor = (num) => {
  switch (true) {
    case num <= 10:
      return '#009432'; // grass green
    case num <= 15:
      return '#27ae60'; // green
    case num <= 20:
      return '#A3CB38'; // dried grass
    case num <= 30:
      return '#eccc68'; // sand
    case num <= 40:
      return '#fbc531'; // sun
    case num <= 50:
      return '#ffb329'; // light orange
    case num <= 60:
      return '#ffa502'; // orange
    case num <= 70:
      return '#d65930'; // burnt orange
    case num <= 80:
      return '#ff3838'; // red
    case num <= 90:
      return '#EA2027'; // red
    case num <= 100:
      return '#eb2f06'; // red
    default:
      return '#a4b0be'; // grey
  }
};

const YardBlock = ({ block, forcastIndex, size }) => {
  const {
    id, name, capacity, forcast,
  } = block;
  const utilization = (forcast[forcastIndex].containers / capacity) * 100;

  return (
    <Link
      className="yard-block-link"
      style={{ margin: '15px 10px' }}
      to={{
        pathname: '/blocks',
        state: { activeBlockId: id },
      }}
    >
      <div
        className="yard-block-container column-flex"
        style={{
          backgroundColor: getBlockColor(utilization),
          height: size ? size.height : '120px',
          width: size ? size.width : '270px',
        }}
      >
        <p>{name}</p>
        <p>{`${+utilization.toFixed(2)} %`}</p>
        <p>{`${forcast[forcastIndex].containers} TEUs`}</p>
      </div>
    </Link>
  );
};

export default YardBlock;
