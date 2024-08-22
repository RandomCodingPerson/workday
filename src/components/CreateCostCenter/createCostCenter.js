import React from 'react';

import './createCostCenter.scss'
import '../Homepage/Homepage.scss'

import { useState } from 'react';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {setupIcon, chartIcon} from '@workday/canvas-system-icons-web';

import ContentTable from './components/contentTable/contentTable';
import ContentTableTwo from './components/contentTable2/contentTable2';

const CreateCostCenter = (props) => {
    return (
        <div className='createCostCenter'>
            <div className='bannerText'>
                <h2>Create Cost Center</h2>
                <div className='icons'>
                    <SystemIcon
                        className='setupIcon'
                        icon={setupIcon}
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
                <a href='/virtualCareerCenter'><button className='ok'>OK</button></a>
                <a href='/'><button className='cancel'>Cancel</button></a>
            </div>
        </div>
    )
}

export default CreateCostCenter;
