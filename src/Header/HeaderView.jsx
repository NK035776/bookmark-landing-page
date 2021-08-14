import React from 'react';
import classes from './HeaderView.module.css';
import {ReactComponent as BookMarkIcon } from '../images/logo-bookmark.svg';

const HeaderView = (props) => {
    return( 
    <div className={classes.headerDiv}>
        <div className={classes.HeaderInnerDiv}>
            <div className={classes.headerLeftDiv}>
                <BookMarkIcon />
            </div>
            <div className={classes.headerRightDiv}>
                <ul className={classes.headerUl}>
                    <li className={classes.headerIl}>FEATURES</li>
                    <li className={classes.headerIl}>PRICING</li>
                    <li className={classes.headerIl}>CONTACT</li>
                    <li id='loginId' className={classes.headerIlLogin}>LOGIN</li>
                </ul>
            </div>
        </div>
    </div>
    );
}


export default HeaderView;