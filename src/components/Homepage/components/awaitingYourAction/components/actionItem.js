import React from 'react';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {locationIcon} from '@workday/canvas-system-icons-web';

const aya = (props) => {

    return (
            <div className='actionItem'>
                <div className='locationIconWrapper'>
                    <SystemIcon
                        className='locationIcon'
                        icon={locationIcon}
                        fill={colors.frenchVanilla100}
                        background="white"
                    />
                </div>
                <div className='actionText'>
                    <p className='actionName'>{props.title}</p>
                    <p>{props.text}</p>
                </div>
            </div>
    )
}

export default aya
