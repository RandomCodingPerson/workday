import React, { useState } from 'react';
import Modal from 'react-minimal-modal';
import Select from 'react-select'

import './createPositionFinishedModal.scss';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {xSmallIcon} from '@workday/canvas-system-icons-web';

const cpm = (props) => {
    const options = [
        { value: 'hr', label: 'Human Resources' },
        { value: 'it', label: 'Information Technologies' },
        { value: 'code', label: 'Software Development' },
        { value: 'pr', label: 'Marketing and PR' },
        { value: 'accounting', label: 'Accounting' }
    ]
        
    return (
        <Modal style={{marginTop: "12vh"}} className='createPositionFinishedModal' open={props.isOpen} onOpenChange={props.onChange} hideIcon={true} position="top">
            <div className='iconWrapper'>
                <button className='icon' onClick={props.onChange}>
                    <SystemIcon
                            className='xIcon'
                            icon={xSmallIcon}
                            fill={"#505ADF"}
                    />
                </button> 
            </div>
            <div className='content'>
                <h3>You have submitted</h3>
                <div className='supOrgWrapper'>
                    <p><b>Up next:</b> Matthew Aaron, Change Organization Assignments, Due Date 01/15/2022</p>
                    <p className='a'>View Details</p>
                </div>
                <div className='buttons'>
                    <a href='/'><button className='ok'>Open</button></a>
                    <button onClick={props.onChange} className='cancel'>Skip</button>
                </div>
            </div>
        </Modal>
    )
}

export default cpm;