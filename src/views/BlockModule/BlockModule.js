import React, { Component } from 'react';

import DropdownMenu from '../../components/DropdownMenu';
import ContainerDistrChart from '../../components/_charts/ContainerDistrChart';
import UtilizationChart from '../../components/_charts/UtilizationChart';
import BlockSlider from '../../components/BlockSlider';

import BLOCK_DATA from '../../constants/block_data/start_shift_one';
import timestampFormater from '../../helpers/timestamp_formater';

import './style.css';

class BlockModule extends Component {
  state = {
    sliderValue: 0,
  };

  handleSliderChange = (event, value) => {
    this.setState({ sliderValue: value });
  };

  render() {
    const { location } = this.props;
    const { sliderValue } = this.state;
    const activeId = location.state ? location.state.activeBlockId : BLOCK_DATA[0].id;
    const activeBlock = BLOCK_DATA.find(({ id }) => id === activeId);
    const {
      capacity, dwellTime, forcast,
    } = activeBlock;

    const timeLabel = sliderValue === 0 ? 'Current' : timestampFormater(forcast[sliderValue].timestamp);
    const utilization = (forcast[sliderValue].containers / capacity) * 100;

    return (
      <div className="block-module-container column-flex">
        <div className="block-module-top-row row-flex-wrap">
          <div className="dropdown-title row-flex">
            <DropdownMenu data={BLOCK_DATA} activeItem={activeBlock} menuType="BLOCK" />
          </div>
          <div className="slider row-flex">
            <BlockSlider
              value={sliderValue}
              handleChange={this.handleSliderChange}
              valueLabel={timeLabel}
              max={forcast.length - 1}
            />
          </div>
        </div>
        <div className="block-module-mid-row row-flex-wrap">
          <div className="block-stats column-flex">
            <h3>{timeLabel}</h3>
            <ul>
              <li>{`Container count: ${forcast[sliderValue].containers}`}</li>
              <li>{`Capcity: ${capacity}`}</li>
              <li>{`Current utilization: ${+utilization.toFixed(2)} %`}</li>
              <li>{`Average dwell time: ${dwellTime} days`}</li>
            </ul>
          </div>
          <div className="graphs">
            <ContainerDistrChart
              capacity={capacity}
              forcast={forcast.slice(sliderValue, sliderValue + 3)}
            />
            <UtilizationChart
              capacity={capacity}
              forcast={forcast.slice(sliderValue, sliderValue + 3)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BlockModule;
