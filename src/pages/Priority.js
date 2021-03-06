import React from "react";
import ReactDragListView from "react-drag-listview";
import StatusBar from "../components/StatusBar";
import "../styles/Priority.css";
import { Link } from "react-router-dom";

const Priority = ({ infoArr, setInfoArr }) => {
  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const data = infoArr;
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      const newArr = [];
      for (let i = 0; i < data.length; i++) {
        newArr.push({
          content: data[i].content,
        });
      }
      setInfoArr(newArr);
    },
    nodeSelector: "li",
    handleSelector: "div",
  };

  return (
    <div className="priority-wrapper">
      <StatusBar />
      <div className="priority-body-wrapper">
        <div className="step-wrapper">
          <div className="step-bar">
            <div className="priority-current-step"></div>
          </div>
        </div>
        <div className="priority-title-wrapper">
          <h2 className="priority-title-content">
            Prioritize your sensitivity.
          </h2>
        </div>
        <div className="priority-title-description-wrapper">
          <h4>
            Drag each cards and change the order to
            <br />
            prioritize your sensitivity in driving.
          </h4>
        </div>
        <div className="priority-element-wrapper">
          <ReactDragListView {...dragProps}>
            <ol className="multi-body-info">
              {infoArr.map((singleInfo, i) => (
                <li key={i} className="priority-single-body-info">
                  <div className="element-title-wrapper">
                    <div className="element-title">{singleInfo.content}</div>
                  </div>
                  <div className="element-drag">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"
                        fill="#323232"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ol>
          </ReactDragListView>
        </div>
        <div className="priority-button-wrapper">
          <Link to="/body-info">
            <button>Back</button>
          </Link>
          <Link to="/complete-registration">
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Priority;
