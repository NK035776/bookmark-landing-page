import React from 'react';
import classes from './BodyPageThreeViewCardView.module.css';
import {ReactComponent as ChromeLogo } from '../../../images/logo-chrome.svg';
import {ReactComponent as FirefoxLogo } from '../../../images/logo-firefox.svg';
import {ReactComponent as OperaLogo } from '../../../images/logo-opera.svg';

const BodyPageThreeViewCardView = (props) => {

    const switchLogo = (browser) => {
        switch(browser) {
            case 'CHROME':
              return <ChromeLogo />
            case 'FIREFOX':
              return <FirefoxLogo />
            case 'OPERA':
              return <OperaLogo />
            default:
              return null;
          }
    };

    const logoDisplayView = switchLogo(props.browser);

    return (
        <div className={classes.bodyPageThreeViewCardViewOuterDiv}>
            <div className={classes.bodyPageThreeViewCardViewIconRow1}>
                <div className={classes.bodyPageThreeViewCardViewIconRow1Icon}>
                    {logoDisplayView}
                </div>
                <div className={classes.bodyPageThreeViewCardViewIconRow1TextBold}>{props.addText}</div>
                <div className={classes.bodyPageThreeViewCardViewIconRow1TextLow}>{props.versionText}</div>
            </div>
            <div className={classes.bodyPageThreeViewCardViewButtonDiv}>
                <button className={classes.bodyPageThreeViewCardViewButton}>Add or Install Extension</button>
            </div>
        </div>

    );
}

export default BodyPageThreeViewCardView;