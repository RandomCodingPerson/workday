import React from 'react';

import './Homepage.scss'

import AwaitingYourAction from './components/awaitingYourAction/awaitingYourAction'
import QuickTasks from './components/quickTasks/quickTasks'
import Announcements from './components/announcements/announcements'
import TimelySuggestions from './components/timelySuggestions/timelySuggestions'
import YourTeam from './components/yourTeam/yourTeam';
import Schedule from './components/schedule/schedule';
import CreatePositionModal from './components/createPositionModal/createPositionModal';
import CreatePositionFinishedModal from './components/createPositionFinishedModal/createPositionFinishedModal';
import CreateCostCenterModal from './components/createCostCenterModal/createCostCenterModal';

import { useState } from 'react';

import { useLocation } from 'react-router-dom';

const Homepage = (props) => {
    const { search } = useLocation();
    const parameters = new URLSearchParams(search);
    const process = parameters.get('process');

    var baseC = false;
    var costCenter = false;
    var createPosition = false; 

    if (process == "createPositionFin") {
        baseC = true;
    } else if (process == "createCostCenter") {
        costCenter = true;
    } else if (process == "createPosition") {
        createPosition = true;
    }

    const [isCFinished, setIsCFinished] = useState(baseC);
    const [isCostCenterOpen, setIsCostCenterOpen] = useState(costCenter);
    const [isCreateOpen, setIsCreateOpen] = useState(createPosition);

    
    return (
        <div className='homepage'>
            <CreatePositionModal isOpen={isCreateOpen} onChange={() => setIsCreateOpen(false)}/>
            <CreateCostCenterModal isOpen={isCostCenterOpen} onChange={() => setIsCostCenterOpen(false)}/>
            <CreatePositionFinishedModal isOpen={isCFinished} onChange={() => setIsCFinished(false)}/>
            <img src="https://www.publicdomainpictures.net/pictures/220000/velka/scenic-mountain-landscape-1491664544hse.jpg" className='banner'/>
            <div className='bodyWrapper'>
                <div className='left'>
                    <h1>Welcome</h1>
                    <AwaitingYourAction/>
                    <TimelySuggestions/>
                    <YourTeam/>
                </div>
                <div className='right'>
                    <p className='date'>It's Sunday, July 27, 2024</p>
                    <Announcements/>
                    <QuickTasks cpOnClick={() => setIsCreateOpen(true)} ccOnClick={() => setIsCostCenterOpen(true)}/>
                    <Schedule/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
