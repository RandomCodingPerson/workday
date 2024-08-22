import React, { useState } from 'react';
import Modal from 'react-minimal-modal';
import Select from 'react-select'

import './createCostCenterModal.scss';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {xSmallIcon} from '@workday/canvas-system-icons-web';

const cccm = (props) => {
    const options = [
        { value: 'hr', label: 'Virtual Career Center' },
        { value: 'it', label: 'Systems and Technology Center' },
        { value: 'code', label: 'Sales Center' },
        { value: 'pr', label: 'Further Education Center' },
        { value: 'accounting', label: 'Manufacturing Center ' }
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
                <h3>Create Cost Center</h3>
                <div className='hr'/>
                <div className='supOrgWrapper'>
                    <p>Reorganization</p>
                    <p class='ast'>*</p>
                    <div className='selectWrapper'>
                        <Select className='select' options={options} maxMenuHeight={80} isMulti={true}/>
                    </div>
                </div>
                <div className='hr'/>
                <div className='buttons'>
                    <a href='/createCostCenter'><button className='ok'>OK</button></a>
                    <button onClick={props.onChange} className='cancel'>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default cccm;