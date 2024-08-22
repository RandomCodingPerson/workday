import React from 'react';

import PageTitle from '../global/PageTitle/PageTitle'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {starIcon, pdfIcon, gearIcon, excelIcon, fullscreenIcon, relatedActionsIcon, filterIcon, showColIcon, worksheetsIcon, cColumnClusteredIcon, chevronDownIcon, chevronDownSmallIcon, inboxLargeIcon} from '@workday/canvas-system-icons-web';
import { useState } from 'react';
import SuccessPopup from './Components/SuccessPopup/SuccessPopup'
import './Inbox.scss'
import inboxSpecial from "../../img/inboxSpecial.png"
import Days from "./Components/Days/Days";


const Inbox = (props) => {
    const [isComplete, setIsComplete] = useState(false);
    const history = useHistory()
    return (
        <div class="white-bg">
            <SuccessPopup isOpen={isComplete}/>
            <PageTitle id="title" title="Inbox"/>
            <div class="container">
                <div class="sidebar">
                    <div class="flex-container" style={{marginLeft: "1.33vw", fontSize: "15px"}}>
                        <div class="vflex-container">
                            <p style={{color: "#4967ae"}}>Actions</p>
                            <div class="rectangle"/>
                        </div>
                        <div class="vflex-container" style={{marginRight: "15.22vw"}}>
                            <p style={{color: "gray"}}>Archive</p>
                            <div class="rectangle" style={{background: "none"}}></div>
                        </div>
                    </div>
                    <hr style={{height: "1px", color: "gray"}}></hr>
                    <div class="flex-container" style={{marginTop: "1.22vh", marginLeft: "1.9vw", width: "calc(100% - 1.9vw)"}}>
                        <div class="filter-box">
                            <div class="filter-text">Viewing: All</div><SystemIcon class="chevron-center" size={20} icon={chevronDownSmallIcon}/>
                        </div>
                        <div class="filter-box">
                            <div class="filter-text">Sort By: Newest</div><SystemIcon class="chevron-center" size={20} icon={chevronDownSmallIcon}/>
                        </div>
                        <div class="filter-box" style={{width: "max-content", marginRight: "0.98vw"}}>
                            <SystemIcon class="chevron-center" size={20} icon={chevronDownSmallIcon}/>
                        </div>
                    </div>
                    <div class="flex-container" style={{background: "#E4E5E9", marginTop: "2.26vh", fontSize: "12.5px"}}>
                        <div class="rectangle" style={{height: "10.43vh", width: "4px", marginTop: "0px"}}></div>
                        <div style={{marginLeft: "1.77vw"}}>
                            <strong>Time Entry: Matthew Aarons - 30 hours from 11/4/2024 to 11/8/2024</strong><br/>
                            30 minute(s) ago -  Effective 11/1/2024
                        </div>
                        <SystemIcon size={20} icon={starIcon} style={{marginRight: "1vw"}}/>
                    </div>
                </div>
                {!isComplete ? <div style={{marginLeft: "4.35vw"}}>
                    <div class="between-row" style={{marginTop: "1.22vh", marginBottom: "2.5vh", width: "62.9vw"}}>
                        <p style={{fontSize: "20px"}}><strong>Time Entry Approval</strong></p>
                        <div class="between-row" style={{width: "16.54vw"}}>
                            <SystemIcon icon={starIcon}></SystemIcon>
                            <SystemIcon icon={excelIcon}></SystemIcon>
                            <SystemIcon icon={pdfIcon}></SystemIcon>
                            <SystemIcon icon={gearIcon}></SystemIcon>
                            <SystemIcon icon={fullscreenIcon}></SystemIcon>
                        </div>
                    </div>
                    <p class="flex-row" style={{fontSize: "15px", color: "#2734a9"}}>
                        Time Entry: Matthew Aarons - 30 hours from 11/4/2024 to 11/8/2024 <div><SystemIcon style={{borderColor: "whitesmoke", borderStyle: "solid", marginLeft: "1.18vw "}} icon={relatedActionsIcon} size={20}></SystemIcon></div>
                    </p>
                    <div class="time-info">
                        <div style={{width: "19.1vw", borderStyle: "solid", borderColor: "whitesmoke", borderWidth: "0 2px 0 0"}}>
                            30 minute(s) ago - Effective 11/1/2024
                        </div>
                        <div style={{paddingLeft: "2.46vw"}}>
                            <strong>Total Hours Worked</strong>
                            <div style={{color: "#428452"}}><strong>36</strong></div>
                        </div>
                    </div>
                    <div class="flex-row" style={{marginTop: "5.96vh"}}>
                        <strong>Worker</strong><div style={{marginLeft: "1.38vw", color: "#2734a9"}}>Matthew Aarons</div>
                    </div>
                    <div style={{marginTop: "9.6vh", fontSize: "13px"}}>
                        <div class="between-row" style={{width: "62.9vw"}}>
                            <div class="flex-row">
                                <strong>Daily Totals</strong>
                                <div style={{marginLeft: "0.59vw"}}>5 items</div>
                            </div>
                            <div class="between-row" style={{width: "11.3vw"}}>
                                <SystemIcon size={20} icon={excelIcon}></SystemIcon>
                                <SystemIcon size={20} icon={worksheetsIcon}></SystemIcon>
                                <SystemIcon size={20} icon={filterIcon}></SystemIcon>
                                <SystemIcon size={20} icon={cColumnClusteredIcon}></SystemIcon>
                                <SystemIcon size={20} icon={showColIcon}></SystemIcon>
                                <SystemIcon size={20} icon={fullscreenIcon}></SystemIcon>
                            </div>
                        </div>
                        <Days/>
                        <div class="between-row" style={{marginTop: "5.5vh", width: "40.86vw", marginBottom: "5vh"}}>
                            <div class="option yellow" onClick={() => setIsComplete(true)}><strong>Approve</strong></div>
                            <div class="option ececee" onClick={() => history.push('/')}><strong>Send Back</strong></div>
                            <div class="option ececee" onClick={() => history.push('/')}><strong>Deny</strong></div>
                            <div class="option ececee" onClick={() => history.push('/')}><strong>Close</strong></div>

                        </div>
                    </div>
                </div> : <div style={{display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center"}}>
                    <img src={inboxSpecial} style={{width: "11.32vw", height: "auto"}}></img>
                    </div>}
            </div>
        </div>
    )
}

export default Inbox
