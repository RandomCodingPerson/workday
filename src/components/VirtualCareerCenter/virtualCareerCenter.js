import React from 'react';

import './virtualCareerCenter.css'

import { useState } from 'react';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {setupIcon, chartIcon, pdfIcon, excelIcon, worksheetsIcon, filterIcon, cColumnClusteredIcon, showColIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import threeDots from '../../img/three-dots.png'
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles({
table: {
    minWidth: 700,
},
});
const VirtualCareerCenter = (props) => {
    const classes = useStyles();
    const theme = useTheme()
    return (
        <div className='virtualCareerCenter'>
            <div className='bannerText'>
                <h2>Virtual Career Center</h2> 
                <div className='icons'>
                    <img src={threeDots} height={20} style={{borderRadius: ".2vw"}}></img>
                    <SystemIcon icon={pdfIcon} size={30} color="white"></SystemIcon>
                </div>
            </div>
            <div style={{marginTop: "3.9vh", display: "flex", flexDirection: "row", marginLeft: "2.46vw", marginBottom: "11.11vh"}}>
                Type<p style={{color: "blue", marginLeft: "15px"}}>Cost Center</p>
            </div>
            <div className='tabs'>
                <button className='selected'>Members</button>
                <button className='other'>Details</button>
                <button className='other'>Staffing</button>
                <button className='other'>Unavailable to Fill</button>
                <button className='other'>Roles</button>
                <button className='other'>Security Groups</button>
            </div>
            <div className='hr'></div>
            <div class="flex-row" style={{justifyContent: "right", marginRight: "2.86vw", alignItems: "center", marginBottom: "3vh"}}>
                <p style={{marginRight: "2vw", fontSize: "14px"}}>Turn on the new tables view</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
            <div style={{fontSize: "13px", marginLeft: "5vw", height: "100%"}}>
                <div class="between-row" style={{width: "92vw", marginBottom: "1vh"}}>
                    <div class="flex-row">
                        <strong>Members</strong>
                        <div style={{marginLeft: "0.59vw"}}>0 items</div>
                    </div>
                    <div class="between-row" style={{width: "11.3vw"}}>
                        <SystemIcon size={20} icon={excelIcon}></SystemIcon>
                        <SystemIcon size={20} icon={worksheetsIcon}></SystemIcon>
                        <SystemIcon size={20} icon={filterIcon}></SystemIcon>
                        <SystemIcon size={20} icon={showColIcon}></SystemIcon>
                        <SystemIcon size={20} icon={fullscreenIcon}></SystemIcon>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell classes="header relevant">Worker</StyledTableCell>
                                <StyledTableCell classes="header relevant" align="left">Position</StyledTableCell>
                                <StyledTableCell classes="header relevant" align="left">Supervisory Organization</StyledTableCell>
                                <StyledTableCell classes="header relevant" align="left">Phone</StyledTableCell>
                                <StyledTableCell classes="header relevant" align="left">Email</StyledTableCell>
                                <StyledTableCell classes="header relevant" align="left">Location</StyledTableCell>


                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">No Data</StyledTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default VirtualCareerCenter;
