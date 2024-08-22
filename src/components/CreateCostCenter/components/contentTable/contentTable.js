import React from 'react';

import './contentTable.scss'

import { useState } from 'react';
import Select from 'react-select'

const ContentTable = (props) => {
    const subtypes = [
        { value: 'cc', label: 'Cost Center' },
        { value: 'analysis', label: 'Analytics' },
        { value: 'employment', label: 'Employment' }
    ]
    const visibility = [
        { value: 'all', label: 'Everyone' },
        { value: 'assignees', label: 'Role Assignees' },
        { value: 'assignee-member', label: 'Role Assignees and Members' },
        { value: 'assignee-superiors', label: 'Role Assignees of Current and Superiors' },

    ]
    const newD = 'M3 5.505C3 5.226 3.215 5 3.49 5h3.02c.27 0 .49.214.49.505v.99A.495.495 0 0 1 6.51 7H3.49A.49.49 0 0 1 3 6.495zm0 4C3 9.226 3.215 9 3.49 9h3.02c.27 0 .49.214.49.505v.99a.495.495 0 0 1-.49.505H3.49a.49.49 0 0 1-.49-.505zm0 4c0-.279.215-.505.49-.505h3.02c.27 0 .49.214.49.505v.99a.495.495 0 0 1-.49.505H3.49a.49.49 0 0 1-.49-.505zm0 4c0-.279.215-.505.49-.505h3.02c.27 0 .49.214.49.505v.99a.495.495 0 0 1-.49.505H3.49a.49.49 0 0 1-.49-.505zm6-12C9 5.226 9.229 5 9.5 5h11c.276 0 .5.214.5.505v.99a.506.506 0 0 1-.5.505h-11a.495.495 0 0 1-.5-.505zm0 4C9 9.226 9.229 9 9.5 9h11c.276 0 .5.214.5.505v.99a.506.506 0 0 1-.5.505h-11a.495.495 0 0 1-.5-.505zm0 4c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 0 1-.5.505h-11a.495.495 0 0 1-.5-.505zm0 4c0-.279.229-.505.5-.505h11c.276 0 .5.214.5.505v.99a.506.506 0 0 1-.5.505h-11a.495.495 0 0 1-.5-.505z'

    const externalUrl = [
        { value: 'yes', label: 'Yes'},
        { value: "no", label: "No"}
    ]
    const companyRestrictions = [
        { value: 'yes', label: 'Yes'},
        { value: "no", label: "No"}
    ]
    const replaceDropdownImg = () => {
        let elements = document.querySelectorAll('[d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"]')
        console.log('elements', elements)
        elements.forEach(element => {
            element.setAttribute('d', newD)
            console.log('newelement', element)
        })
        elements = document.querySelectorAll('[d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"]')
        console.log('new', elements)
    }
    return (
        <div className='contentTable'>
            <table>
                <tr className='formItem'>
                    <td className='label'>Reorganization</td>
                    <td className='req'></td>
                    <td className='item'>Virtual Career center</td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Availability Date</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <input className='input date' type='date'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Name</td>
                    <td className='req'></td>
                    <td className='item'>
                        <input className='input' type='text'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Code</td>
                    <td className='req'></td>
                    <td className='item'>
                        <input className='input' type='number'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Include Code in Name</td>
                    <td className='req'></td>
                    <td className='item'>
                        <input className='input check' type='checkbox'/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Subtype</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <Select className='select' options={subtypes} maxMenuHeight={180} isMulti={true}/>
                    </td>
                </tr>
                
                <tr className='formItem'>
                    <td className='label'>Visibility</td>
                    <td className='req'>*</td>
                    <td className='item'>
                        <Select className='select' options={visibility} maxMenuHeight={180} isMulti={true}/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>External URL</td>
                    <td className='req'></td>
                    <td className='item'>
                        <Select className='select' options={externalUrl} maxMenuHeight={180}/>
                    </td>
                </tr>

                <tr className='formItem'>
                    <td className='label'>Restricted to Companies</td>
                    <td className='req'></td>
                    <td className='item'>
                        <Select className='select' options={companyRestrictions} maxMenuHeight={180}/>
                    </td>
                </tr>

            </table>
            {replaceDropdownImg()}
        </div>
    )
}

export default ContentTable;
