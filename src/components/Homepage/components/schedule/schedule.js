import React from 'react';

import './schedule.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {calendarIcon} from '@workday/canvas-system-icons-web';

const sched = (props) => {

    return (

        <div className="box sched" style={{paddingBottom: "1vw"}}>
            <h3>Important Dates</h3>
            <p>You have no important dates coming up</p>
            <div className='hr'/>
            <a>
                <SystemIcon
                    className='mediaTopicsIcon'
                    icon={calendarIcon}
                    fill={"#505ADF"}
                />
                <div className='t'>Go to Team Calendar</div>
            </a>
        </div>
    )
}

export default sched;