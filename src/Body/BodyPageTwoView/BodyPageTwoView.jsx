import React, { useState } from 'react';
import classes from './BodyPageTwoView.module.css';
import {ReactComponent as IllustrationFeaturesTab1 } from '../../images/illustration-features-tab-1.svg';
import {ReactComponent as IllustrationFeaturesTab2 } from '../../images/illustration-features-tab-2.svg';
import {ReactComponent as IllustrationFeaturesTab3 } from '../../images/illustration-features-tab-3.svg';

import {ReactComponent as IllustrationFeaturesTab1Mobile } from '../../images/images-mobile/illustration-features-tab-1-mobile.svg';
import {ReactComponent as IllustrationFeaturesTab2Mobile } from '../../images/images-mobile/illustration-features-tab-2-mobile.svg';
import {ReactComponent as IllustrationFeaturesTab3Mobile } from '../../images/images-mobile/illustration-features-tab-3-mobile.svg';

const BodyPageTwoView = (props) => {


    const [selectTab, setSelectTab] = useState({1: true, 2: false, 3: false});
    const handleOnclickTabOne = () => {
        setSelectTab(prevState => {
            return {...prevState, 1: true, 2: false, 3: false}
        })
    }

    const handleOnclickTabTwo = () => {
        setSelectTab(prevState => {
            return {...prevState, 1: false, 2: true, 3: false}
        })
    }

    const handleOnclickTabThree = () => {
        setSelectTab(prevState => {
            return {...prevState, 1: false, 2: false, 3: true}
        })
    }

    return(
        <div className={classes.bodyPageTwoViewOuterDiv}>
            <div className={classes.bodyPageTwoViewCol1}>
                <div className={classes.bodyPageTwoViewCol1OutDiv}>
                    <button onClick={handleOnclickTabOne} className={selectTab[1] ? classes.bodyPageTwoViewCol1Div1Selected : classes.bodyPageTwoViewCol1Div1}>Simple Bookmarking</button>
                    <button onClick={handleOnclickTabTwo} className={selectTab[2] ? classes.bodyPageTwoViewCol1Div2Selected : classes.bodyPageTwoViewCol1Div2}>Speedy Searching</button>
                    <button onClick={handleOnclickTabThree} className={selectTab[3] ? classes.bodyPageTwoViewCol1Div3Selected : classes.bodyPageTwoViewCol1Div3}>Easy Sharing</button>
                </div>
                <div className={classes.bodyPageTwoViewCol1UnderLine}></div>
            </div>
            {/* First Tab */}
            {selectTab[1] === true ? 
            <div className={classes.bodyPageTwoViewCol2}>
                <div className={classes.bodyPageTwoViewCol2Row1}>
                    {props.width > 375 ?  <IllustrationFeaturesTab1 /> : <IllustrationFeaturesTab1Mobile /> }
                </div>
                <div className={classes.bodyPageTwoViewCol2Row2}>
                    <div className={classes.bodyPageTwoViewCol2Row2Col1}>Bookmark in one click</div>
                    <div className={classes.bodyPageTwoViewCol2Row2Col2}>Organize your bookmarks 
                        however you like. Our simple drag-and-drop interface gives you complete 
                        control over how you manage your favourite sites.
                    </div>
                    <button className={classes.bodyPageTwoViewCol2Row2Col3}>More Info</button>               
                </div>
            </div> : null}

            {/* Second Tab */}
            {selectTab[2] === true ? 
            <div className={classes.bodyPageTwoViewCol2}>
                <div className={classes.bodyPageTwoViewCol2Row1}>
                    {props.width > 375 ?  <IllustrationFeaturesTab2 /> : <IllustrationFeaturesTab2Mobile /> }
                </div>
                <div className={classes.bodyPageTwoViewCol2Row2}>
                    <div className={classes.bodyPageTwoViewCol2Row2Col1}>Intelligent search</div>
                    <div className={classes.bodyPageTwoViewCol2Row2Col2}>Our powerful search feature 
                        will help you find saved sites in no time at all. No need to trawl through 
                        all of your bookmarks.
                    </div>
                    <button className={classes.bodyPageTwoViewCol2Row2Col3}>More Info</button>               
                </div>
            </div> : null}

            {/* Thrid Tab */}
            {selectTab[3] === true ? 
            <div className={classes.bodyPageTwoViewCol2}>
                <div className={classes.bodyPageTwoViewCol2Row1}>
                    {props.width > 375 ? <IllustrationFeaturesTab3 /> : <IllustrationFeaturesTab3Mobile /> }
                </div>
                <div className={classes.bodyPageTwoViewCol2Row2}>
                    <div className={classes.bodyPageTwoViewCol2Row2Col1}>Share your bookmarks</div>
                    <div className={classes.bodyPageTwoViewCol2Row2Col2}>Easily share your bookmarks 
                        and collections with others. Create a shareable link that you can send at the 
                        click of a button.
                    </div>
                    <button className={classes.bodyPageTwoViewCol2Row2Col3}>More Info</button>               
                </div>
            </div>  : null}

            <div className={classes.bodyPageTwoViewCol3}>
                <div className={classes.bodyPageTwoViewCol3Row1}>Download the extension</div>
                <div className={classes.bodyPageTwoViewCol3Row2}>We’ve got more browsers in 
                    the pipeline. Please do let us know if you’ve got a favourite you’d like 
                    us to prioritize.
                </div>
            </div>
        </div>
    );
}

export default BodyPageTwoView;