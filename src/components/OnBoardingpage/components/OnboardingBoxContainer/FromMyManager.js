import React from 'react'
import {
    Paper,
    Typography
} from '@material-ui/core'

const FromMyManager = () => {
    return (
        <Paper className="onboarding-item">
            <Typography variant="h7" style={{fontWeight: "bold"}}>From My Manager</Typography>
            <div style={{padding: "20px", textAlign: "center"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcYWgLSyWI68e-x6saOrSnHJJ0tDQcuGSdQ&usqp=CAU" className="onboarding-background" />
            </div>
        </Paper>
    )
}

export default FromMyManager
