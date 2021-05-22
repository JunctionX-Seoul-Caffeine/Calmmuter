import React from "react";
import "../styles/BodyInfo.css";

const BodyInfo = () => {
  const bodyInfoArr = [
    { content: "Motion Sickness" },
    { content: "Mental Illness" },
    { content: "Disabled Arms" },
    { content: "Disabled Legs" },
    { content: "Pregnancy" },
    { content: "Ear Problems" },
  ];
  return (
    <div className="body-info-wrapper">
      <div className="step-wrapper">
        <div className="step-bar"></div>
      </div>
      <div className="title-wrapper">
        <h2>Which difficulties do you have?</h2>
        <h4>(optional)</h4>
      </div>
      <div className="body-info-element-wrapper">
        <div className="single-body-info">
          {bodyInfoArr.map((singleInfo) => (
            <div className="single-body-info">{singleInfo.content}</div>
          ))}
        </div>
      </div>
      <div className="button-wrapper">
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default BodyInfo;
