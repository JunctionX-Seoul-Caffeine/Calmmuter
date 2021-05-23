import React from "react";
import StatusBar from "../components/StatusBar";
import "../styles/AskBodyInfoPage.css";
import "../styles/StatusBar.css";
import { Link } from "react-router-dom";

const AskBodyInfoPage = () => {
  return (
    <div className="ask-body-info-page-body-info-wrapper">
      <StatusBar />
      <div className="ask-body-info-page-main-title">
        Let us know about you
        <br />
        for a better riding experience.
      </div>
      <div className="ask-body-info-page-main-description">
        We will match you with the driver who has
        <br />
        the most matching driving habits with
        <br />
        your health condition.
      </div>
      <div className="ask-body-info-page-illustrator-wrapper">
        <img
          className="ask-body-info-page-illustrator"
          src={require("../assets/askbodyinfo_img.png").default}
          alt=""
        />
      </div>
      <div className="ask-body-info-page-skip-button">
        <button>I want to skip it</button>
      </div>
      <div className="ask-body-info-page-start-button">
        <Link to="/body-info">
          <button>OK!</button>
        </Link>
      </div>
    </div>
  );
};

export default AskBodyInfoPage;
