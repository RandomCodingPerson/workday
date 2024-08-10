import React from 'react';

import './contentTable.scss'

import { useState } from 'react';
import Select from 'react-select'

const ContentTable = (props) => {
    const options = [
        { value: 'hr', label: 'Create Position > Position Request > Staff New Project' },
        { value: 'it', label: 'Create New Position' },
        { value: 'code', label: 'Create Replacement Position' }
    ]
    return (
        <div className='contentTable'>
            <table>
                <tr className='formItem'>
                    <td className='label'>Supervisory Organization</td>
                    <td className='req'></td>
                    <td className='item'>Human Resources</td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Position Request Reason</td>
                    <td className='req'></td>
                    <td className='item'>
                        <Select className='select' options={options} maxMenuHeight={120} isMulti/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Posting Title</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <input className='input' type='text'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Number of Positions</td>
                    <td className='req'>* </td>
                    <td className='item'>
                        <input className='input' type='number'/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ContentTable;
