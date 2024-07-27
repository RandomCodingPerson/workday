import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './Referrals.css'
import { RowingRounded } from '@material-ui/icons';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(id, candidate, referredBy, referralDate, comments, application, applicationStage) {
  return { 
    id,
    candidate,
    referredBy,
    referralDate,
    comments,
    application,
    applicationStage
   };
}

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    // color: theme.palette.common.white,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(6698, 'Aisha Negi', 'Krishna Soni', '27/04/19', 'Have a great communication skills', 'HR Associate', 'LinkedIn'),
  createRow(4513, 'Akash Soni', 'Unnati Sachdev', '02/07/20', 'Experience in leading a team of 10 members', 'Team Lead', 'LinkedIn'),
  createRow(1290, 'Rahul Sharma', 'Harsh Sahani', '15/05/20', 'Good experience with programming and product development', 'Software Engineer', 'LinkedIn'),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Referrals = () => {
  const classes = useStyles();
  const theme = useTheme()
  return (
    <div>
    <PageTitle title="My Referrals" />
    <div className="referrals-main">
      <Typography variant="caption" style={{fontWeight: "bold", marginBottom:"8px"}}><span style={{color: theme.palette.action.active}}>{rows.length} items</span></Typography>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                <TableRow>
                    <CustomTableCell align="center">Candidate</CustomTableCell>
                    <CustomTableCell align="center">Referred For</CustomTableCell>
                    <CustomTableCell align="center">Referral Date</CustomTableCell>
                    <CustomTableCell align="center">Comments</CustomTableCell>
                    <CustomTableCell colSpan={6} align="center">Referral Jobs Applied For</CustomTableCell>
                </TableRow>
                <TableRow>
                    <CustomTableCell align="right" colSpan={8}>Job Application</CustomTableCell>
                    <CustomTableCell align="center">Job Application Stage</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <CustomTableCell align="center">
                      <Link 
                        to={`/career/my-referrals/${row.id}`}
                        className="referrals-link"
                      >{row.candidate}</Link>
                    </CustomTableCell>
                    <CustomTableCell align="center">{row.referredBy}</CustomTableCell>
                    <CustomTableCell align="center">{row.referralDate}</CustomTableCell>
                    <CustomTableCell align="center">{row.comments}</CustomTableCell>
                    <CustomTableCell colSpan={4} align="right">{row.application}</CustomTableCell>
                    <CustomTableCell align="center">{row.applicationStage}</CustomTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    </div>
  );
}

export default Referrals