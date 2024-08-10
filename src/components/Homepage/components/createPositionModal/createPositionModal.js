import React, { useState } from 'react';
import Modal from 'react-minimal-modal';
import Select from 'react-select'

import './createPositionModal.scss';
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
        <Modal className='createPositionModal' open={props.isOpen} onOpenChange={props.onChange} hideIcon={true} position="center">
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
                <h3>Create Position</h3>
                <div className='hr'/>
                <div className='supOrgWrapper'>
                    <p>Supervisory Organization</p>
                    <p class='ast'>*</p>
                    <div className='selectWrapper'>
                        <Select className='select' options={options} maxMenuHeight={80} />
                    </div>
                </div>
                <div className='hr'/>
                <div className='buttons'>
                    <a href='/createPosition'><button className='ok'>OK</button></a>
                    <button onClick={props.onChange} className='cancel'>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default cpm;