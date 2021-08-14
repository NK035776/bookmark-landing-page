import React from 'react';
import BodyPageFourCollpaseView from './BodyPageFourCollpaseView/BodyPageFourCollpaseView';
import classes from './BodyPageFourView.module.css';

const collapseViewValues = {
    col1: ["What is Bookmark?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."],
    col2: ["How can I request a new browser?", "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."],
    col3: ["Is there a mobile app?", "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."],
    col4: ["What about other Chromium browsers?", "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."]
};

const collapseView = () => {
    let collapseTotalView = [];
    let k = 0;
    for(const value of Object.entries(collapseViewValues)) {
        collapseTotalView[k++] = <BodyPageFourCollpaseView questionText={value[1][0]} questionDetail={value[1][1]}/>
    }
    return collapseTotalView;
}


const BodyPageFourView = (props) => {

    const collapseTotalView = collapseView();

    return(
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
            {collapseTotalView}
            <div style={{padding: '5%'}}>
            <button className={classes.bodyPageFourButton}>More Info</button>
            </div>
        </div>
    );
}

export default BodyPageFourView;