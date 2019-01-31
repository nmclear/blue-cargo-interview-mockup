import React from 'react';

import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@material-ui/core';

import timestampFormater from '../../../helpers/timestamp_formater';

const PortCallTable = ({ portData }) => (
  <Paper className="port-call-table-container">
    <Table className="table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="center">Vessel</TableCell>
          <TableCell align="center">ETA</TableCell>
          <TableCell align="center">ETD</TableCell>
          <TableCell align="center">CTRS</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {portData.map(call => (
          <TableRow key={call.id}>
            <TableCell component="th" scope="row">
              {call.name}
            </TableCell>
            <TableCell align="left">{call.vessel}</TableCell>
            <TableCell align="left">{timestampFormater(call.eta)}</TableCell>
            <TableCell align="left">{timestampFormater(call.etd)}</TableCell>
            <TableCell align="left">{call.containers}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default PortCallTable;
