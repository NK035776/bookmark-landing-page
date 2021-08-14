import React, { useState } from 'react';
import classes from './BodyPageFiveView.module.css';
import {ReactComponent as ErrorIcon} from '../../images/icon-error.svg';
import validator from 'validator';



const BodyPageFiveView = (props) => {

    const [emailValue, setEmailValue] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleInputValueChange = (e) => {
        setEmailValue(e.target.value);
    }

    const validateEmail = (e) => {
        var email = e
      
        if (validator.isEmail(email)) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
    }

    const handleContactUs = () => {
        validateEmail(emailValue);
    }

    return (
        <div className={classes.bodyPageFourViewOuterDiv}>
            <div className={classes.bodyPageFourViewRow1Div}>
                <div className={classes.bodyPageFourViewRow1Row1}>
                    35,000+ already joined
                </div>
                <div className={classes.bodyPageFourViewRow1Row2}>
                    Stay up-to-date with what we’re doing
                </div>
                <div className={classes.bodyPageFourViewRow1Row3}>
                    <div className={classes.bodyPageFourViewRow1Row3TextDiv}>
                        <input type='email' 
                            placeholder="Enter your email address" 
                            className={emailError ? 
                                classes.bodyPageFourViewRow1Row3TextError : 
                                classes.bodyPageFourViewRow1Row3Text}
                            onChange={handleInputValueChange}>
                        </input>
                        {emailError?
                        <ErrorIcon className={classes.bodyPageFourViewRow1Row3ErrorIcon}/> : null }
                        {emailError?
                        <div className={classes.bodyPageFourViewRow1Row3ErrorBanner}>
                            Whoops, make sure it's an email
                        </div> : null }
                    </div>
                    <div>
                        <button
                            onClick={handleContactUs}
                            className={classes.bodyPageFourViewRow1Row3BtnDiv}>Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.bodyPageFourViewRow2Div}>

            </div>
        </div>
    );
}

export default BodyPageFiveView;