import React from 'react';

import './yourTeam.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {AppletIcon} from '@workday/canvas-kit-react/icon';
import {birthdaysIcon} from '@workday/canvas-applet-icons-web';

import TeamItem from './components/teamItem';

const yt = (props) => {

    return (
        <div className="box yourTeam">
            <h3 className='sectionHeader'>Your Team</h3>
            <TeamItem title="Grace Anderson's Birthday is Tuesday, January" text="Wish her a happy birthday!" icon={birthdaysIcon}/> 
        </div>
    )
}

export default yt
