import React, { Component } from 'react';

import BlockSlider from '../../components/BlockSlider';
import YardBlock from '../../components/YardBlock';

import BLOCK_DATA from '../../constants/block_data/start_shift_one';

import timestampFormater from '../../helpers/timestamp_formater';
import './style.css';

class YardModule extends Component {
  state = {
    sliderValue: 0,
  };

  handleSliderChange = (ev, value) => {
    this.setState({ sliderValue: value });
  };

  render() {
    const { sliderValue } = this.state;
    const timeLabel = sliderValue === 0
      ? 'Current'
      : timestampFormater(BLOCK_DATA[0].forcast[sliderValue].timestamp);
    return (
      <div className="yard-module-container">
        <h1>Yard Module</h1>
        <div className="slider row-flex flex-center">
          <BlockSlider
            value={sliderValue}
            handleChange={this.handleSliderChange}
            valueLabel={timeLabel}
            max={BLOCK_DATA[0].forcast.length - 1}
          />
        </div>
        <div className="yard-blocks-group row-flex-wrap">
          {BLOCK_DATA.map(block => (
            <YardBlock key={block.id} block={block} forcastIndex={sliderValue} />
          ))}
        </div>
      </div>
    );
  }
}

export default YardModule;
