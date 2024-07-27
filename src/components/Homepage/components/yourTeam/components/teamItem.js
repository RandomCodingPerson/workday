import React from 'react';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {AppletIcon} from '@workday/canvas-kit-react/icon';

const sug = (props) => {

    return (
        <div className="teamItem">
            <div className='leftWrapper'>
                <div className='helpIconWrapper'>
                    <AppletIcon
                        className='helpIcon'
                        icon={props.icon}
                    />
                </div>
                <div className='textWrapper'>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default sug
