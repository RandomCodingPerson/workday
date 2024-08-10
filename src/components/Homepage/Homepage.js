import React from 'react';

import './Homepage.scss'

import AwaitingYourAction from './components/awaitingYourAction/awaitingYourAction'
import QuickTasks from './components/quickTasks/quickTasks'
import Announcements from './components/announcements/announcements'
import TimelySuggestions from './components/timelySuggestions/timelySuggestions'
import YourTeam from './components/yourTeam/yourTeam';
import Schedule from './components/schedule/schedule';
import CreatePositionModal from './components/createPositionModal/createPositionModal';

import { useState } from 'react';

const Homepage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <CreatePositionModal isOpen={isOpen} onChange={() => setIsOpen(false)}/>
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
                    <QuickTasks cpOnClick={() => setIsOpen(true)}/>
                    <Schedule/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
