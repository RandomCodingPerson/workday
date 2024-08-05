import React, {useEffect, useState} from 'react'
import { CandidateData } from './CandidateData'
import PageTitle from '../../../global/PageTitle/PageTitle'
import Axios from 'axios'

import './ReferralDynamicPage.css'

const ReferralDynamicPage = (props) => {
    const [candidate, setCandidate] = useState({});
    useEffect(() => {
        let slug = props.location.pathname.split('/')[props.location.pathname.split('/').length - 1]
        let selected = CandidateData.filter(el => el.id == slug);
        if (selected.length > 0) {
            setCandidate(selected[0])
        }
    }, [])

    return (
        <>
            <PageTitle title="Candidate" back path='/career/my-referrals' />
            <h1 className="referral-dynamic-title">{candidate.name}</h1>
            <div className="referral-dynamic-main">
                <div className="referral-box-1">
                    <p>
                        {candidate.description}
                    </p>
                </div>
                <div className="referral-box-2">
                    <img
                        src={candidate.imagePath}
                        className="referral-candidate-img"
                    />
                    <h4>Position: <span className="referral-candidate-metadata">{candidate.position}</span></h4>
                    <h4>Address: <span className="referral-candidate-metadata">{candidate.address}</span></h4>
                    <h4>Phone: <span className="referral-candidate-metadata">{candidate.phone}</span></h4>
                    
                </div>
            </div>
        </>
    )
}

export default ReferralDynamicPage;