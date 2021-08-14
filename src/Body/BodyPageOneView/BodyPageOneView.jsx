import React from 'react';
import classes from './BodyPageOneView.module.css';
import {ReactComponent as IllustrationHero } from '../../images/illustration-hero.svg';
import {ReactComponent as IllustrationHeroMobile} from '../../images/images-mobile/illustration-hero-mobile.svg';

const BodyPageOneView = (props) => {
    return(
        <div className={classes.pageOneOuterDiv}>
            <div className={classes.pageOneRowDiv}>
                <div className={classes.pageOneRowDivLeft}>
                    <div className={classes.pageOneRowDivLeftCol1}>
                        A Simple Bookmark Manager
                    </div>
                    <div className={classes.pageOneRowDivLeftCol2}>A clean and simple interface 
                        to organize your favourite websites. Open a new browser tab and see your 
                        sites load instantly. Try it for free.
                    </div>
                    <div className={classes.pageOneRowDivLeftCol3}>
                        <button className={classes.pageOneRowDivLeftCol3Row1}>Get it on Chrome</button>
                        <button className={classes.pageOneRowDivLeftCol3Row2}>Get it on Firefox</button>
                    </div>
                </div>
                <div className={classes.pageOneRowDivRight}>
                    {props.width > 375 ?
                    <IllustrationHero className={classes.pageOneRowDivRightImage}/> :
                    <IllustrationHeroMobile className={classes.pageOneRowDivRightImage}/>}
                </div>

            </div>
            <div className={classes.pageSecondRowDiv}>
                <div className={classes.pageOneColumnDivRow1}>Features</div>
                <div className={classes.pageOneColumnDivRow2}>Our aim is to make it quick and easy 
                    for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </div>
            </div>
        </div>

    );
}

export default BodyPageOneView;