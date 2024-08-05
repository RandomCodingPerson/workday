import React from 'react';

import './timelySuggestions.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {AppletIcon} from '@workday/canvas-kit-react/icon';
import {helpIcon} from '@workday/canvas-applet-icons-web';
import {timeOffIcon} from '@workday/canvas-applet-icons-web';

import Suggestion from './components/suggestion';

const ts = (props) => {

    return (
        <div className="box timelySuggestion">
            <h3 className='sectionHeader'>Timely Suggestions</h3>
            <Suggestion title="You have upcoming absences" suggestion="You have scheduled off for August 3rd, 2024" icon={timeOffIcon}/>
            <Suggestion title="Case #CASE000001: New" suggestion="Click View Case to see more" icon={helpIcon}/>
        </div>
    )
}

export default ts
