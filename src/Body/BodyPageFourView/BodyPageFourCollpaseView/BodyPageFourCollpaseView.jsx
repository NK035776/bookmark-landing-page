import React, { useState } from 'react';
import {ReactComponent as ArrowIcon } from '../../../images/icon-arrow.svg';
import {ReactComponent as ArrowUpIcon } from '../../../images/arrow-up-logo.svg';
import classes from './BodyPageFourCollpaseView.module.css';


const BodyPageFourCollpaseView = (props) => {

    const [isHidden, setIsHidden] = useState(true);

    const handleOnCollapseClick = () => {
        setIsHidden(prevState => !prevState);
    }

    return(
        <div key={props.questionText} className={classes.collapseOuterDiv}>
            <div className={classes.collapseInnerDiv} onClick={handleOnCollapseClick}>
                <div className={classes.collapseQuestionDiv}>
                    {props.questionText}
                </div>
                <div className={classes.collapseArrowDiv}>
                    {isHidden? <ArrowIcon /> : <ArrowUpIcon />}
                </div>
            </div>
            {isHidden ? null:
            <div className={classes.collapseQuesDetailDiv}>
                {props.questionDetail}
            </div>}
        </div>
    );
}

export default BodyPageFourCollpaseView ;