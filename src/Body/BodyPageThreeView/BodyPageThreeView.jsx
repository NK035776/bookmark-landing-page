import React from "react";
import classes from "./BodyPageThreeView.module.css";
import BodyPageThreeViewCardView from './BodyPageThreeViewCards/BodyPageThreeViewCardView';


const BrowserDetails = {
    'CHROME' : ['Add to Chrome', 'Minimum version 62'],
    'FIREFOX' : ['Add to Firefox', 'Minimum version 55'],
    'OPERA' : ['Add to Opera', 'Minimun version 45'],
};

const BodyPageThreeView = (props) => {
    return (
        <div className={classes.bodyPageThreeViewOuterDiv}>
            <div className={classes.bodyPageThreeViewRow1}>
                <div>
                    <BodyPageThreeViewCardView 
                        browser={Object.keys(BrowserDetails)[0]} 
                        addText={BrowserDetails.CHROME[0]} 
                        versionText={BrowserDetails.CHROME[1]}/>
                </div>
                <div style={{marginTop: '100px'}}>
                    <BodyPageThreeViewCardView 
                        browser={Object.keys(BrowserDetails)[1]} 
                        addText={BrowserDetails.FIREFOX[0]} 
                        versionText={BrowserDetails.FIREFOX[1]}/>
                </div>
                <div style={{marginTop: '200px'}}>
                    <BodyPageThreeViewCardView 
                        browser={Object.keys(BrowserDetails)[2]} 
                        addText={BrowserDetails.OPERA[0]} 
                        versionText={BrowserDetails.OPERA[1]}/>
                </div>
            </div>
            <div className={classes.pageSecondRowDiv}>
            <div className={classes.pageOneColumnDivRow1}>Frequently Asked Questions</div>
                <div className={classes.pageOneColumnDivRow2}>Here are some of our FAQs. 
                    If you have any other questions you’d like answered please feel free to 
                    email us.
                </div>
            </div>
        </div>

    );
}

export default BodyPageThreeView;