import React from 'react';

import './createPosition.scss'
import '../Homepage/Homepage.scss'

import { useState } from 'react';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {setupIcon, chartIcon} from '@workday/canvas-system-icons-web';

import ContentTable from './components/contentTable/contentTable';
import ContentTableTwo from './components/contentTable2/contentTable2';

const CreatePosition = (props) => {
    return (
        <div className='createPosition'>
            <div className='bannerText'>
                <h2>Create Position</h2>
                <div className='icons'>
                    <SystemIcon
                        className='setupIcon'
                        icon={setupIcon}
                        fill={"#e8ebed"}
                    />
                    <SystemIcon
                        className='chartIcon'
                        icon={chartIcon}
                        fill={"#e8ebed"}
                    />
                </div>
            </div>
            <div className='content'>
                <ContentTable/>
            </div>
            <div className='content2'>
                <ContentTableTwo/>
            </div>
            <div className='buttons'>
                <a href='/?process=createPosition'><button className='ok'>Submit</button></a>
                <a href='/'><button className='cancel'>Save for later</button></a>
                <a href='/'><button className='cancel'>Cancel</button></a>
            </div>
        </div>
    )
}

export default CreatePosition;
