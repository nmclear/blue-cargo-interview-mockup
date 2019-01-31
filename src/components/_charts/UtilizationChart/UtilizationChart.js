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
import './style.css';

import timestampFormater from '../../../helpers/timestamp_formater';

class UtilizationChart extends Component {
  getFormattedForcastData = () => {
    const { capacity, forcast } = this.props;
    const formatted = forcast.map(({ timestamp, containers }) => ({
      timestamp: timestampFormater(timestamp),
      utilization: ((containers / capacity) * 100).toFixed(2),
    }));

    return formatted;
  };

  render() {
    return (
      <div>
        <p className="graph-header">Machine Utilization Forcast</p>
        <ResponsiveContainer width="80%" height={300}>
          <BarChart data={this.getFormattedForcastData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="utilization" domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="utilization" fill="#e15f41">
              <LabelList dataKey="utilization" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default UtilizationChart;
