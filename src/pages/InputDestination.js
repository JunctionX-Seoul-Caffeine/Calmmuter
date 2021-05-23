import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import "../styles/InputDestination.css";
import { Link } from "react-router-dom";
import ReactDragListView from "react-drag-listview";

const InputDestination = ({
  destination,
  infoArr,
  setInfoArr,
  bodyInfoArr,
  setBodyInfoArr,
}) => {
  const [toggle, setToggle] = useState(true);

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

  const onClick = ({ id }) => {
    setBodyInfoArr(
      bodyInfoArr.map((singleInfo) =>
        singleInfo.id === id
          ? { ...singleInfo, selected: !singleInfo.selected }
          : singleInfo
      )
    );
  };

  return (
    <div className="map">
      <StatusBar />
      <div
        className={
          toggle
            ? "input-location-dest-wrapper"
            : "input-location-dest-wrapper-not-toggle"
        }
      >
        <div className="input-location-wrapper">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="5" stroke="#646B71" stroke-width="4" />
          </svg>
          From
        </div>
        <div id="input1">
          <input defaultValue="My Location"></input>
        </div>
        <div className="input-dest-wrapper">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 9.00008C7.91683 9.00008 8.66683 8.25008 8.66683 7.33342C8.66683 6.41675 7.91683 5.66675 7.00016 5.66675C6.0835 5.66675 5.3335 6.41675 5.3335 7.33342C5.3335 8.25008 6.0835 9.00008 7.00016 9.00008ZM7.00016 0.666748C10.5002 0.666748 13.6668 3.35008 13.6668 7.50008C13.6668 10.1501 11.6252 13.2667 7.55016 16.8584C7.2335 17.1334 6.7585 17.1334 6.44183 16.8584C2.37516 13.2667 0.333496 10.1501 0.333496 7.50008C0.333496 3.35008 3.50016 0.666748 7.00016 0.666748Z"
              fill="#FFCD4B"
            />
          </svg>
          To
        </div>
        <div id="input2">
          <input defaultValue={destination}></input>
        </div>
        <div className="apply-condition-wrapper">
          <div>Apply my health condition</div>
          {toggle ? (
            <svg
              onClick={() => setToggle(!toggle)}
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31432 0.310934L5.49508 4.43546L1.67584 0.310934C1.29195 -0.103645 0.671812 -0.103645 0.287919 0.310934C-0.0959732 0.725513 -0.0959732 1.39522 0.287919 1.80979L4.80604 6.68907C5.18993 7.10364 5.81007 7.10364 6.19396 6.68907L10.7121 1.80979C11.096 1.39522 11.096 0.725513 10.7121 0.310934C10.3282 -0.0930144 9.69821 -0.103645 9.31432 0.310934Z"
                fill="#646B71"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setToggle(!toggle)}
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.68568 6.68907L5.50492 2.56454L9.32416 6.68907C9.70805 7.10364 10.3282 7.10364 10.7121 6.68907C11.096 6.27449 11.096 5.60478 10.7121 5.19021L6.19396 0.310934C5.81007 -0.103644 5.18993 -0.103644 4.80604 0.310935L0.28792 5.19021C-0.0959731 5.60478 -0.0959731 6.27449 0.28792 6.68907C0.671812 7.09302 1.30179 7.10365 1.68568 6.68907Z"
                fill="#646B71"
              />
            </svg>
          )}
        </div>
        {!toggle ? (
          <>
            <p className="section-title-difficulties">Difficulties</p>
            <section className="reselect-body-info-element-wrapper">
              {bodyInfoArr.map((singleInfo) => (
                <div
                  className={
                    singleInfo.selected
                      ? "reselect-single-body-info-selected"
                      : "reselect-single-body-info"
                  }
                  onClick={() => onClick(singleInfo)}
                  key={singleInfo.id}
                >
                  <img src={singleInfo.src.default} alt="" />
                  {singleInfo.content}
                </div>
              ))}
            </section>
            <section className="drag-list-wrapper">
              <p className="section-title-priorities">Prioritize sensitivity</p>
              <ReactDragListView {...dragProps}>
                <ol className="reselect-multi-body-info">
                  {infoArr.map((singleInfo, i) => (
                    <li key={i} className="reselect-priority-single-body-info">
                      <div className="reselect-element-title-wrapper">
                        <div className="element-title">
                          {singleInfo.content}
                        </div>
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
            </section>
          </>
        ) : null}
      </div>
      <div className="request-drive-button-wrapper">
        <button>
          <Link to="/">Request A Drive</Link>
        </button>
      </div>
    </div>
  );
};

export default InputDestination;
