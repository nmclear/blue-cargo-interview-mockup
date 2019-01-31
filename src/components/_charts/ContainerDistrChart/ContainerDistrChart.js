import React, { Component } from 'react';
import {
  BarChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

import timestampFormater from '../../../helpers/timestamp_formater';

import './style.css';

class ContainerDistrChart extends Component {
  getFormattedForcastData = () => {
    const { forcast } = this.props;
    const formatted = forcast.map(({ timestamp, containers }) => ({
      timestamp: timestampFormater(timestamp),
      containers,
    }));

    return formatted;
  };

  render() {
    const { capacity } = this.props;

    return (
      <div>
        <p className="graph-header">Container Distribution Forcast</p>
        <ResponsiveContainer width="80%" height={300}>
          <BarChart data={this.getFormattedForcastData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="containers" domain={[0, capacity]} />
            <Tooltip />
            <Bar dataKey="containers" fill="#227093">
              <LabelList dataKey="containers" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ContainerDistrChart;
