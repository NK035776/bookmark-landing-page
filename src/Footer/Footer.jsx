import React, { useState } from 'react';
import classes from './Footer.module.css';
import {ReactComponent as FooterIcon} from '../images/logo-bookmark.svg';
import {ReactComponent as FacebookIcon} from '../images/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../images/icon-twitter.svg';
import {ReactComponent as FacebookRedIcon} from '../images/icon-facebook-red.svg';
import {ReactComponent as TwitterIRedcon} from '../images/icon-twitter-red.svg';
import {ReactComponent as FooterIconWhite} from '../images/logo-bookmark-white.svg';

const Footer = (props) => {

    const [isOnFbIcon, setIsOnFbIcon] = useState(false);
    const [isOnTwIcon, setIsOnTwIcon] = useState(false);

    const handleMouseOverFb = () => setIsOnFbIcon(true);
    const handleMouseOutFb = () => setIsOnFbIcon(false);
    const handleMouseOverTw = () => setIsOnTwIcon(true);
    const handleMouseOutTw = () => setIsOnTwIcon(false);

    return (
        <div className={classes.footerOuterDiv}>
            <div className={classes.footerRow1}>
                <FooterIconWhite />
            </div>
            <div className={classes.footerRow2}>
                <div className={classes.footerText1}>FEATURES</div>
                <div className={classes.footerText2}>PRICING</div>
                <div className={classes.footerText3}>CONTACT</div>
            </div>
            <div className={classes.footerRow3}>
                <div onMouseOver={handleMouseOverFb} onMouseOut={handleMouseOutFb}>
                    {isOnFbIcon ? <FacebookRedIcon /> : <FacebookIcon /> } 
                </div>
                <div onMouseOver={handleMouseOverTw} onMouseOut={handleMouseOutTw}>
                    {isOnTwIcon ? <TwitterIRedcon /> : <TwitterIcon />}
                </div>
            </div>
        </div>
    );
}

export default Footer;