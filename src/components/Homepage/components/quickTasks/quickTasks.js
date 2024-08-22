import React from 'react';

import './quickTasks.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {mediaTopicsIcon} from '@workday/canvas-system-icons-web';

const qt = (props) => {

    return (

        <div className="box qt" style={{paddingBottom: "1vw"}}>
            <h3>Quick Tasks</h3>
            <div><button className="button-text">Enter and Approve Time Off</button></div>
            <div><button className="button-text" onClick={props.cpOnClick}>Create Position</button></div>
            <div><button className="button-text" onClick={props.ccOnClick}>Create Cost Center</button></div>
            <div className='hr'/>
            <a>
                <SystemIcon
                    className='mediaTopicsIcon'
                    icon={mediaTopicsIcon}
                    fill={"#505ADF"}
                />
                <div className='t'>View All Apps</div>
            </a>
        </div>
    )
}

export default qt