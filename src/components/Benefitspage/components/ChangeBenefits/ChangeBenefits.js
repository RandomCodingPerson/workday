/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Typography,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Button
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import PageTitle from '../../../global/PageTitle/PageTitle'
import './ChangeBenefits.css'

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: "30px"
    },
    textField: {
        border: "1px solid #A9A9A9",
        borderRadius: "5px",
        padding: "10px",
    },
    label: {
        fontSize: "15px !important"
    }
  }));

const ChangeBenefits = () => {
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
        <PageTitle title="Change Benefits" />
        <div className="change-benefits-main">
            <div className="change-benefits-reason">
                <Typography variant="caption" style={{fontWeight: "bold", marginTop: "10px"}}>Change Reason</Typography>
                <span className="mandatory">*</span>
                <FormControl component="fieldset" style={{marginLeft: "35px"}}>
                    <RadioGroup aria-label="benefits" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel 
                            value="Additional Voluntary Contribution (AVC)" 
                            control={<Radio color="primary" />} 
                            label={<Typography style={{fontSize: "13px"}}>Additional Voluntary Contribution (AVC)</Typography>}
                        />
                        <FormControlLabel 
                            value="Beneficiary Changes" 
                            control={<Radio color="primary" />} 
                            label={<Typography style={{fontSize: "13px"}}>Beneficiary Changes</Typography>}
                        />
                        <FormControlLabel 
                            value="Declare Alternate Medical Aid" 
                            control={<Radio color="primary" />} 
                            label={<Typography style={{fontSize: "13px"}}>Declare Alternate Medical Aid</Typography>}   
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            {
                value && <div style={{display: "flex", marginTop: "35px"}} className="benefit-event">
                    <Typography variant="caption" style={{fontWeight: "bold", alignSelf: "center"}}>Benefit Event Date</Typography>
                    <span className="mandatory">*</span>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="YYYY/MM/DD"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                </div>
            }
            {
                value && <div style={{display: "flex", marginTop: "35px"}}>
                    <Typography variant="caption" style={{fontWeight: "bold"}}>Submit Elections By</Typography>
                    <Typography style={{marginLeft: "25px", alignSelf: "center"}} variant="caption">(empty)</Typography>
                </div>
            }

            {
                value && <div style={{display: "flex", marginTop: "35px"}}>
                    <Typography variant="caption" style={{fontWeight: "bold"}}>Benefits Offered</Typography>
                    <Typography style={{marginLeft: "25px", alignSelf: "center"}} variant="caption">(empty)</Typography>
                </div>
            }

            {
                value && <div style={{marginTop: "35px"}}>
                <Typography variant="h5" style={{fontWeight: "bold"}}>Attachments</Typography>
                <div style={{
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: '#f0f1f2',
                    border: "1px dotted #808080",
                    borderRadius: '5px',
                    padding: "30px"
                }}>
                    <Typography style={{color: "black"}}>Drop files here</Typography>
                    <div style={{
                        background: "#A9A9A9",
                        borderRadius:"50%",
                        width: "25px",
                        height: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "12px",
                        margin: "6px 0 14px 0"
                    }}>or</div>
                    <Button 
                        variant="contained"
                        style={{
                            borderRadius: "25px",
                            background: "transparent",
                            border: "1px solid #808080",
                            boxShadow: "none" ,
                            fontWeight: "bold",
                            fontSize: "12px",
                            textTransform: "initial",
                            padding: "5px 20px"
                        }}    
                    >Select files</Button>
                </div>
                </div>
            }

            <div className="change-benefits-comment-container">
                <img 
                    src="data:image/jpeg;base64,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" 
                    className="change-benefits-profile-comment" 
                />
                <textarea 
                    className="change-benefits-comment" 
                    rows="3" 
                    cols="100"
                    placeholder="enter your comment"    
                ></textarea>
            </div>
        </div>
        <div className="change-benefits-btn-container" style={{marginTop: "auto", display: "block"}}>
            <Button variant="contained" color="secondary" className="change-benefits-btn1">Submit</Button>
            <Button variant="contained" className="change-benefits-btn2">Save for Later</Button>
            <Button 
                variant="contained" 
                className="change-benefits-btn2"
                onClick={() => history.push('/')}    
            >Cancel</Button>
        </div>
        </div>
    )
}

export default ChangeBenefits
