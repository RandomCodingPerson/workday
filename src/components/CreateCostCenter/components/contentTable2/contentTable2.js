import React from 'react';

import './contentTable2.scss'

import { useState } from 'react';
import Select from 'react-select'
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {starIcon, pdfIcon, gearIcon, excelIcon, fullscreenIcon, relatedActionsIcon, filterIcon, showColIcon, worksheetsIcon, cColumnClusteredIcon, chevronDownIcon, chevronDownSmallIcon, inboxLargeIcon} from '@workday/canvas-system-icons-web';
/* eslint-disable jsx-a11y/alt-text */
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

function createData(type, tags) {
  return { type, tags };
}
let fundTags = [
    "01 Operating Fund", 
    "02 Sponsored Programs Fund", 
    "03 Plant Fund", 
    "04 Auxiliary Fund", 
    "05 Sponsor Cost Share Fund", 
    "06 Unrestricted Endowment Fund", 
    "07 Temporarily Restricted Endowment Fund", 
    "08 Permanently Restricted Endowment Fund", 
    "09 Temporarily Restricted Payout", 
    "10 Unrestricted Payout", 
    "20 Student Sponsor Contracts", 
    "25 Williams Hall - Capital Project Fund", 
    
]
let programTags = [
    "10 Instructon", 
    "111 Science", 
    "112 Engineering", 
    "113 Math", 
    "114 Technology", 
    "115 Computer Science", 
    "121 Business Management", 
    "122 Hospitality", 
    "123 Human Resources Management", 
    "124 Finance", 
    "125 Accounting",  
    
]
const rows = [
    createData("Fund", fundTags),
    createData("Program", programTags),

];


const ContentTable = (props) => {

    return (
        <div className='contentTable2'>
            <div className='tabs'>
                <button className='hiring'>Related Worktags</button>
                <button className='qual'>Assign Roles</button>
            </div>
            <div className='hr'></div>
            <p style={{marginTop: "2vh", marginLeft: "25px"}}>13 items</p>
            <div class="between-row" style={{width: "100vw"}}>
                <div class="between-row" style={{width: "calc(100vw - 25px)", justifyContent: "right"}}>
                    <SystemIcon size={20} icon={filterIcon}></SystemIcon>
                    <SystemIcon size={20} icon={showColIcon}></SystemIcon>
                    <SystemIcon size={20} icon={fullscreenIcon}></SystemIcon>
                </div>
            </div>
            <div style={{marginLeft: "0px"}}>
                <TableContainer component={Paper} className="visible-overflow">
                <Table aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell classes="header relevant" style={{width: "19.26vw"}}>Worktag Type</StyledTableCell>
                        <StyledTableCell classes="header relevant" align="left" style={{width: "25vw"}}>Allowed Worktags</StyledTableCell>
                        <StyledTableCell classes="header relevant" align="left" style={{width: "7.45vw"}}>Default Required</StyledTableCell>
                        <StyledTableCell classes="header relevant" align="left" style={{width: "25.95vw"}}>Default Workday</StyledTableCell>
                        <StyledTableCell classes="header relevant" align="left" style={{width: "5.4vw"}}>Required on Transaction</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {console.log('rows', rows)}
                    {rows.map((row) => (
                        <StyledTableRow key={row.type}>
                            {console.log("row", row)}
                            <StyledTableCell align="left">{row.type}</StyledTableCell>
                            <StyledTableCell align="left">
                                <Select className='select' options={row.tags.map(tag => {
                                    return {value: tag, label: tag}})} maxMenuHeight={180} isMulti={true}/>                            
                            </StyledTableCell>
                            <StyledTableCell align="right"><input className='input check' type='checkbox'/>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Select className='select' options={row.tags.map(tag => {
                                        return {value: tag, label: tag}})} maxMenuHeight={180}/>                            
                            </StyledTableCell>
                            <StyledTableCell><input className='input check' type='checkbox'/>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ContentTable;
