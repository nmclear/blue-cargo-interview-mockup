import React from 'react';
import Slider from '@material-ui/lab/Slider';

const BlockSlider = (props) => {
  const {
    value, handleChange, valueLabel, max,
  } = props;
  return (
    <div className="slider-container" style={{ width: '70%', maxWidth: 300 }}>
      <Slider value={value} min={0} max={max} step={1} onChange={handleChange} />
      <p style={{ textAlign: 'center' }}>{valueLabel}</p>
    </div>
  );
};

export default BlockSlider;
