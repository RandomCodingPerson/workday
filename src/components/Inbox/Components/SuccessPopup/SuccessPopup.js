import React, { useState } from 'react';
import Modal from 'react-minimal-modal';
import Select from 'react-select'

import './SuccessPopup.scss';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {xSmallIcon} from '@workday/canvas-system-icons-web';

import greenCheck from "../../../../img/greenCheck.png"

const SuccessPopup = (props) => {
    const [dismissed, setDismissed] = useState(false)
    const options = [
        { value: 'hr', label: 'Human Resources' },
        { value: 'it', label: 'Information Technologies' },
        { value: 'code', label: 'Software Development' },
        { value: 'pr', label: 'Marketing and PR' },
        { value: 'accounting', label: 'Accounting' }
    ]
        
    return (
        <>
        {!dismissed &&
            <Modal style={{marginTop: "12vh"}} className='successPopup' open={props.isOpen} onOpenChange={() => setDismissed(true)} hideIcon={true} position="top">
                <div className='iconWrapper'>
                    <button className='icon' onClick={() => setDismissed(true)}>
                        <SystemIcon
                                className='xIcon'
                                icon={xSmallIcon}
                                fill={"#505ADF"}
                        />
                    </button> 
                </div>
                <div className='content' style={{display: "flex", flexDirection: "row", width: "25vw", justifyContent: "space-around"}}>
                    <img src={greenCheck} style={{width: "50px", height: "50px"}}></img>
                    <div><h3 style={{marginBottom: "0.5vh"}}>You Have Submitted</h3>
                    <a style={{color: "#1E42CB"}}>View Details</a></div>
                </div>
            </Modal>}</>
    )
}

export default SuccessPopup;