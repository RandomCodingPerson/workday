import React from 'react';

import './contentTable2.scss'

import { useState } from 'react';
import Select from 'react-select'

const ContentTable = (props) => {
    const options = [
        { value: 'hr', label: 'Human Resources' },
        { value: 'it', label: 'Information Technologies' },
        { value: 'code', label: 'Software Development' },
        { value: 'pr', label: 'Marketing and PR' },
        { value: 'accounting', label: 'Accounting' }
    ]

    const options2 = [
        { value: 'cc', label: 'Career Counselor'},
        { value: "pr", label: "Payroll Manager"},
        { value: "dei", label: "Director of Diversity"}
    ]

    return (
        <div className='contentTable2'>
            <div className='tabs'>
                <button className='hiring'>Hiring Restrictions</button>
                <button className='qual'>Qualifications</button>
            </div>
            <div className='hr'></div>
            <table>
                <tr className='formItem'>
                    <td className='label'>Availability Date</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <input className='input date' type='date'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Earliest Hire Date</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <input className='input date' type='date'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>No Job Posting Title</td>
                    <td className='req'></td>
                    <td className='item'>
                        <input className='input check' type='checkbox'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Family</td>
                    <td className='req'></td>
                    <td className='item'>
                        <Select className='select' options={options} maxMenuHeight={80} />
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Profiles for Job Family</td>
                    <td className='req'></td>
                    <td className='item'>
                        <p className='gray'>(empty)</p>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Profiles for Job Family</td>
                    <td className='req'></td>
                    <td className='item'>
                        <Select className='select' options={options2} isMulti maxMenuHeight={80} />
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Description Summary</td>
                    <td className='req'></td>
                    <td className='item'>
                        <textarea rows={3} className='input ta'></textarea>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Job Description</td>
                    <td className='req'></td>
                    <td className='item'>
                        <textarea rows={7} className='input ta'></textarea>
                    </td>
                </tr>


            </table>
        </div>
    )
}

export default ContentTable;
