import React from 'react';

import './awaitingYourAction.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {inboxIcon} from '@workday/canvas-system-icons-web';

import ActionItem from './components/actionItem';

const aya = (props) => {

    return (
        <div className="box awaitingAction">
            <h3>Awaiting Your Action</h3>
            <ActionItem title='You have 3 assigned journeys' text='Journey - Building belonging, COVID-19 Vaccine, Financial Wellness'/>
            <ActionItem title='Assign Organizations' text='Create positions: QA'/>
            <div className='hr'/>
            <a>
                <SystemIcon
                    className='mediaTopicsIcon'
                    icon={inboxIcon}
                    fill={"#505ADF"}
                />
                <div className='t'>Go to My Tasks (5)</div>
            </a>
        </div>
    )
}

export default aya
