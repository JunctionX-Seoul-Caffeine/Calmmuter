import React from "react";
import StatusBar from "../components/StatusBar";
import "../styles/CompleteRegistrationPage.css";
import "../styles/StatusBar.css";

const CompleteRegistrationPage = () => {

    return (
        <div className="complete-registration-page-body-info-wrapper">
            <StatusBar />
            <div className="complete-registration-page-main-title">
                Now let's find<br/>the best driver for you!
            </div>
            <div className="complete-registration-page-illustrator-wrapper">
                <img className="complete-registration-page-illustrator" src={require('../assets/askbodyinfo_img.png').default} alt=""/>
            </div>
            <div className="complete-registration-page-start-button">
                <button>OK!</button>
            </div>
        </div>
    );
};

export default CompleteRegistrationPage;
