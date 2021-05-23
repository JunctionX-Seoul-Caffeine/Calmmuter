import React, { useEffect, useState } from "react";
import StatusBar from "../components/StatusBar";
import "../styles/MatchPage.css";
import "../styles/StatusBar.css";

const LoadingComp = () => {
  return (
    <>
      <div className="match-grad-wrapper">
        <div className="match-loading-message">Finding the right driver just for you!</div>
        <div className="match-loading-image"></div>
      </div>
    </>
  );
};

const SelectComp = () => {
  return <></>;
};

const FinalComp = () => {
  return <></>;
};

function MatchPage() {
  const [stage, setStage] = useState(0);

  const getPage = (stage, setStage) => {
    switch (stage) {
      case 0:
        return <LoadingComp />;
      case 1:
        return <SelectComp />;
      case 2:
        return <FinalComp />;
    }
  };
  return (
    <>
      <div className="match-statusbar-wrapper">
        <StatusBar />
      </div>
      <div className="match-page-wrapper" onClick={() => setStage((stage) => setStage(stage + 1))}>
        {getPage(stage, setStage)}
      </div>
    </>
  );
}

export default MatchPage;
