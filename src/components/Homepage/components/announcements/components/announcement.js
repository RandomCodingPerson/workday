import React from 'react';

const announcements = (props) => {

    return (
        <div className='announcementWrapper'>
            <div className='imageWrapper'><img src={props.img} className='companyLogo'/></div>
            <div className='textWrapper'>
                <h3>{props.title}</h3>
                <p>{props.announcement}</p>
            </div>
        </div>
    )
}

export default announcements