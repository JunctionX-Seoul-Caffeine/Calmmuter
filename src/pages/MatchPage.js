import React, { useEffect, useState } from "react";
import StatusBar from "../components/StatusBar";
import "../styles/MatchPage.css";
import "../styles/StatusBar.css";

const LoadingComp = ({ stage, setStage }) => {
  return (
    <>
      <div className="match-grad-wrapper" onClick={() => setStage((stage) => setStage(stage + 1))}>
        <div className="match-loading-message">Finding the right driver just for you!</div>
        <div className="match-loading-image"></div>
      </div>
    </>
  );
};

const SelectComp = ({ stage, setStage }) => {
  return (
    <>
      <div className="match-select-wrapper">
        <div className="request-drive-button-wrapper">
          <button className="match-button-text" onClick={() => setStage((stage) => setStage(stage + 1))}>
            Request the AI’s best choice
          </button>
        </div>
        <div className="match-swipe-wrapper" onClick={() => setStage((stage) => setStage(stage + 1))}>
          <div className="match-driver-card driver1"></div>
          <div className="match-driver-card driver2"></div>
          <div className="match-driver-card driver1"></div>
        </div>
      </div>
    </>
  );
};

const FinalComp = () => {
  return <></>;
};

function MatchPage() {
  const [stage, setStage] = useState(0);

  const getPage = (stage, setStage) => {
    switch (stage) {
      case 0:
        return <LoadingComp stage={stage} setStage={setStage} />;
      case 1:
        return <SelectComp stage={stage} setStage={setStage} />;
      case 2:
        return <FinalComp />;
    }
  };
  return (
    <>
      <div className="match-statusbar-wrapper">
        <StatusBar />
      </div>
      <div className="match-page-wrapper">{getPage(stage, setStage)}</div>
    </>
  );
}

export default MatchPage;
