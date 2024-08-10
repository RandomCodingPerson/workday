/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Days.scss'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    // color: theme.palette.common.black,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

function createData(date, type, hours) {
  return { date, type, hours };
}

const rows = [
    createData('Mon, 11/4', 'Hours Worked', '6'),
    createData('Tue, 11/5', 'Hours Worked', '6'),
    createData('Wed, 11/6', 'Hours Worked', '6'),
    createData('Thu, 11/7', 'Hours Worked', '6'),
    createData('Fri, 11/8', 'Hours Worked', '6'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Days = () => {
  const classes = useStyles();
  const theme = useTheme()
  
  return (
    <div>
    <div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell classes="header relevant">Date</StyledTableCell>
                <StyledTableCell classes="header relevant" align="left">Type</StyledTableCell>
                <StyledTableCell classes="header relevant" align="right">Hours</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                    <StyledTableCell align="left">{row.type}</StyledTableCell>
                    <StyledTableCell align="right">{row.hours}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    </div>
  );
}

export default Days