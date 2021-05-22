import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import "../styles/BodyInfo.css";

const BodyInfo = () => {
  const [bodyInfoArr, setBodyInfoArr] = useState([
    {
      id: 1,
      content: "Motion Sickness",
      selected: false,
      src: require("../assets/image.png"),
    },
    {
      id: 2,
      content: "Mental Illness",
      selected: true,
      src: require("../assets/image(1).png"),
    },
    {
      id: 3,
      content: "Disabled Arms",
      selected: false,
      src: require("../assets/image(2).png"),
    },
    {
      id: 4,
      content: "Disabled Legs",
      selected: false,
      src: require("../assets/image(3).png"),
    },
    {
      id: 5,
      content: "Pregnancy",
      selected: true,
      src: require("../assets/image(4).png"),
    },
    {
      id: 6,
      content: "Ear Problems",
      selected: false,
      src: require("../assets/image(5).png"),
    },
    {
      id: 7,
      content: "Patient",
      selected: false,
      src: require("../assets/image(6).png"),
    },
    {
      id: 8,
      content: "With Baby",
      selected: false,
      src: require("../assets/image(7).png"),
    },
  ]);

  const onClick = ({ id, src }) => {
    setBodyInfoArr(
      bodyInfoArr.map((singleInfo) =>
        singleInfo.id === id
          ? { ...singleInfo, selected: !singleInfo.selected }
          : singleInfo
      )
    );
    console.log(src);
  };

  return (
    <>
      <StatusBar />
      <div className="body-info-wrapper">
        <div className="step-wrapper">
          <div className="step-bar">
            <div className="current-step"></div>
          </div>
        </div>
        <div className="title-wrapper">
          <h3>Which difficulties do you have?</h3>
          <h4>(optional)</h4>
        </div>
        <div className="body-info-element-wrapper">
          {bodyInfoArr.map((singleInfo) => (
            <div
              className={
                singleInfo.selected
                  ? "single-body-info-selected"
                  : "single-body-info"
              }
              onClick={() => onClick(singleInfo)}
              key={singleInfo.id}
            >
              <img src={singleInfo.src.default} alt="" />
              {singleInfo.content}
              {singleInfo.selected ? (
                <svg
                  className="selected-mark"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM10.935 21.435L5.55 16.05C4.965 15.465 4.965 14.52 5.55 13.935C6.135 13.35 7.08 13.35 7.665 13.935L12 18.255L22.32 7.935C22.905 7.35 23.85 7.35 24.435 7.935C25.02 8.52 25.02 9.465 24.435 10.05L13.05 21.435C12.48 22.02 11.52 22.02 10.935 21.435Z"
                    fill="#767CEA"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default BodyInfo;
