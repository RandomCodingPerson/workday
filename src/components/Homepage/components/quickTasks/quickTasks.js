import React, { useState } from 'react';

import './quickTasks.scss';

import workdayIcons from "@workday/canvas-system-icons-web";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {mediaTopicsIcon, switchIcon} from '@workday/canvas-system-icons-web';
import { Draggable } from "react-drag-reorder";

function Qt(props) {

    const [drag, setDrag] = useState(false);
    const [started, setStarted] = useState(false);

    const switchDrag = () => {

        setStarted(true);
        
        if (drag) {
            for (let i = 0; i < document.getElementsByClassName("grabbable").length; i++) {
                let element = document.getElementsByClassName("grabbable")[i];
                element.draggable = false;
                element.firstChild.classList.remove("drag");
            }
            
        } else {
            for (let i = 0; i < document.getElementsByClassName("grabbable").length; i++) {
                let element = document.getElementsByClassName("grabbable")[i];
                element.draggable = true;
                element.firstChild.classList.add("drag");
            }
        }
        setDrag(!drag);
    }

    return (

        <div className="box qt" style={{paddingBottom: "1vw"}}>
            <div className='qtAndShuffle'>
                <h3>Quick Tasks</h3>

                <button onClick={() => {
                    switchDrag()
                }}>
                    <SystemIcon
                        className='switchIcon'
                        icon={switchIcon}
                    />
                </button>

            </div>

            {started ? (
                <Draggable>
                    <a href='/inbox' className='drag'><div><button className="button-text draggable">Enter and Approve Time Off</button></div></a>
                    <div className='drag'><button className="button-text draggable" onClick={props.cpOnClick}>Create Position</button></div>
                    <div className='drag'><button className="button-text draggable" onClick={props.ccOnClick}>Create Cost Center</button></div>
                </Draggable>
            ) : (
                <div>
                    <a href='/inbox'><div><button className="button-text draggable">Enter and Approve Time Off</button></div></a>
                    <div><button className="button-text draggable" onClick={props.cpOnClick}>Create Position</button></div>
                    <div><button className="button-text draggable" onClick={props.ccOnClick}>Create Cost Center</button></div>
                </div>
            )}
                
            
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

export default Qt;