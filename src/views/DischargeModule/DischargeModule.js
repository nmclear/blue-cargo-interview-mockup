import React, { Component } from 'react';

import DropdownMenu from '../../components/DropdownMenu';
import YardBlock from '../../components/YardBlock';

import BLOCK_DATA from '../../constants/block_data/start_shift_one';
import PORT_CALL_DATA from '../../constants/port_call_data';

import './style.css';

class DischargeModule extends Component {
  state = {
    blockData: BLOCK_DATA,
    vesselData: PORT_CALL_DATA,
    errorMsg: '',
    successMsg: '',
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('vesselId', id);
    return this.setState({
      errorMsg: '',
      successMsg: '',
    });
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  isBlockUnderCapacity = (block, incoming) => {
    const utilization = (block.forcast[0].containers + incoming) / block.capacity;

    return utilization <= 1;
  };

  addContainersToBlockById = (containers, id) => {
    const { blockData } = this.state;
    const currentBlock = blockData.find(block => block.id === id);
    const index = blockData.findIndex(block => block.id === id);

    const passed = this.isBlockUnderCapacity(currentBlock, containers);

    if (!passed) {
      return this.setState({
        errorMsg: 'Block overcapacity. Reduce drop size.',
      });
    }

    const currentForcast = currentBlock.forcast[0];
    const upcomingForcast = currentBlock.forcast.slice(1);

    upcomingForcast.unshift({
      ...currentForcast,
      containers: currentForcast.containers + containers,
    });

    const updatedBlockData = [...blockData];
    updatedBlockData[index].forcast = upcomingForcast;
    this.setState({
      blockData: updatedBlockData,
    });

    return passed;
  };

  handleContainerDrop = (vesselId, blockId) => {
    const vesselData = this.state.vesselData.map((vessel) => {
      if (vessel.id === vesselId) {
        const passed = this.addContainersToBlockById(vessel.containers, blockId);
        if (passed) {
          this.setState({
            successMsg: 'Successful drop!',
          });
          return {
            ...vessel,
            containers: 0,
          };
        }
      }
      return vessel;
    });

    return this.setState({
      vesselData,
    });
  };

  onDrop = (ev, blockId) => {
    const vesselId = ev.dataTransfer.getData('vesselId');
    return this.handleContainerDrop(vesselId, blockId);
  };

  render() {
    const {
      blockData, vesselData, errorMsg, successMsg,
    } = this.state;
    const { location } = this.props;
    const activeId = location.state ? location.state.activeVesselId : vesselData[0].id;
    const activeVessel = vesselData.find(({ id }) => id === activeId);

    return (
      <div className="discharge-module-container row-flex-wrap">
        <div className="vessel-info column-flex-wrap">
          <div className="dropdown-title">
            <DropdownMenu data={vesselData} activeItem={activeVessel} menuType="VESSEL" />
          </div>
          <div className="column-flex flex-center" style={{ width: '100%'}}>
            <h3>Vessel Content</h3>
            <div className="vessel-content row-flex">
              <div>
                <h4>Container Count</h4>
                <div className="vessel-containers-draggable flex-center">
                  <p
                    draggable={activeVessel.containers > 0}
                    onDragStart={e => this.onDragStart(e, activeVessel.id)}
                  >
                    {activeVessel.containers}
                  </p>
                </div>
              </div>
              <div>
                <h4>Dwell Time Class</h4>
                <div className="dwell-time flex-center">
                  <p>0-2 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="yard-info column-flex flex-center">
          <p className="alert-msg" style={{ color: '#eb2f06'}}>{errorMsg}</p>
          <p className="alert-msg" style={{ color: '#009432' }}>{successMsg}</p>
          <div className="yard-blocks-group row-flex-wrap">
            {blockData.map(block => (
              <div
                key={block.id}
                className="droppable"
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => this.onDrop(e, block.id)}
                style={{ padding: '0 4px' }}
              >
                <YardBlock
                  block={block}
                  forcastIndex={0}
                  size={{ height: '90px', width: '140px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DischargeModule;
