import React, { useState } from 'react';

import './announcements.scss';
import Announcement from "./components/announcement";

import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';

function Announcements(props) {

    const [num, setNum] = useState(1);

    const posts = [
        {
            title: "Welcome to Ziplyne",
            announcement: "We are excited that you have joined the Ziplyne team! For your first steps, reach out to your manager for onboarding procedures. You can learn more about our company at our website!",
            img: "https://demo.ziplyne.com/ZL-Login%20Background1.png"
        }, 
        {
            title: "Payslips are out",
            announcement: "Payslips were released this past wednesday. If you did not recieve yours, reach out to HR as soon as possible.",
            img: "https://www.shutterstock.com/shutterstock/videos/1107964073/thumb/1.jpg?ip=x480"
        }
    ]

    return (

        <div className="box announcements" style={{paddingBottom: "1vw"}}>
            <div className='announcementsAndScroll'>
                <h3>Announcements</h3>
                <div>
                    <p>{num} of 2</p>
                    <button onClick={
                        () => {
                            if (num > 1) {
                                setNum(num - 1)
                            } else {
                                setNum(2)
                            }
                        }
                    }>
                        <SystemIcon
                            className='arrowIcon'
                            icon={chevronLeftSmallIcon}
                        />
                    </button>
                    <button onClick={
                        () => {
                            if (num < 2) {
                                setNum(num + 1)
                            } else {
                                setNum(1)
                            }
                        }
                    }>
                        <SystemIcon
                            className='arrowIcon'
                            icon={chevronRightSmallIcon}
                        />
                    </button>
                </div>
            </div>
            
            <Announcement 
                title={posts[num-1].title} 
                announcement={posts[num-1].announcement}
                img={posts[num-1].img}
            />
        </div>
    )
}

export default Announcements