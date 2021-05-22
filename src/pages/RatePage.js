import React, { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/RatePage.css";

const Stars = ({ index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating }) => {
  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return " #767CEA"; // #ffdb58 === 노란색
    } else if (!hoverRating && rating >= index) {
      return " #767CEA"; // #ffdb58 === 노란색
    }
    return "#FFFFFF"; // #dcdcdc === 회색
  }, [rating, hoverRating, index]);

  return (
    <div onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave()} onClick={() => onSaveRating(index)}>
      <StarIcon fill={fillColor} />
    </div>
  );
};

const StarCounter = ({ rating, setRating }) => {
  const rateStr = [" ", "Very Bad", "Bad", "Normal", "Good", "Very Good"];

  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.

  function getRateStr(rating, hoverRating) {
    if (hoverRating === 0) {
      return rateStr[rating];
    } else {
      return rateStr[hoverRating];
    }
  }

  return (
    <div className="star-counter-wrapper">
      <div className="star-counter">
        {[1, 2, 3, 4, 5].map((idx) => {
          return <Stars index={idx} rating={rating} hoverRating={hoverRating} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSaveRating={onSaveRating} />;
        })}
      </div>
      <div className="star-counter-str">{getRateStr(rating, hoverRating)}</div>
    </div>
  );
};

const FirstStage = ({ setStage, stage, setModalOpened }) => {
  const [rating, setRating] = useState(0);

  function getButtonClass(raing) {
    if (rating === 0) {
      return "disable";
    } else return "able";
  }
  return (
    <>
      <div className="first-profile-wrapper">
        <div className="first-profile-photo"></div>
        <div className="first-profile-name">David Williamson</div>
      </div>
      <div className="first-question">How was your ride in regards to your health conditions?</div>
      <StarCounter rating={rating} setRating={setRating} />
      <div className="first-button-wrapper">
        <button
          className="first-detail-button-ride"
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Tell us more about the ride
        </button>
        <button
          className={`first-next-button ${getButtonClass(rating)}`}
          onClick={() => {
            if (stage !== 0) setStage(2);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const ToggleForm = ({ idx, value, setList, list }) => {
  return (
    <div className="modal-toggle-form">
      <div className="modal-toggle-form-label">{value}</div>
      <div className="modal-toggle-switch">
        <div className="toggle-button-cover">
          <div className="button-cover">
            <div className="button b2" id="button-10">
              <input
                type="checkbox"
                className="checkbox"
                onClick={() => {
                  setList({ ...list, [value]: !list[value] });
                }}
              />
              <div className="knobs">
                <span>NO</span>
              </div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRideModal = ({ setModalOpened }) => {
  const values = ["Speed", "Rapid acceleration", "Hand braking", "Traffic rules", "Sharp turns", "Quick lane Changes"];
  const initialList = {
    Speed: false,
    "Rapid acceleration": false,
    "Hand braking": false,
    "Traffic rules": false,
    "Sharp turns": false,
    "Quick lane Changes": false,
  };
  const [list, setList] = useState(initialList);

  return (
    <div className="modal-wrapper">
      <div
        className="close-button-wrapper"
        onClick={() => {
          setModalOpened(false);
        }}
      >
        <CloseIcon />
      </div>
      <div className="modal-title">Tell us more about the ride.</div>
      <div className="modal-subtitle">How did you feel about each categories in regards to your health condition?</div>
      <div className="modal-toggle-form-wrapper">
        {values.map((value, idx) => (
          <ToggleForm idx={idx} value={value} setList={setList} key={idx} list={list} />
        ))}
      </div>
      <div className="button-wrapper">
        <button id="modal-cancel-button">Cancel</button>
        <button
          id="modal-okay-button"
          onClick={() => {
            setModalOpened(false);
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const SecondStage = ({ stage, setStage }) => {
  const tips = ["$0", "5%", "10%", "15%"];
  const [selectedTip, setSelectedTips] = useState("");

  function tipCheck(tip, selectedTip) {
    if (tip === selectedTip) return "able";
    else return "tip-disable";
  }

  return (
    <>
      <div className="first-profile-wrapper">
        <div className="first-profile-photo"></div>
        <div className="first-profile-name">David Williamson</div>
      </div>
      <div className="second-title-wrapper">
        <div className="second-title">Would you leave a tip?</div>
        <div className="second-subtitle">Your trip was $10</div>
      </div>
      <div className="second-tip-wrapper">
        {tips.map((tip, idx) => (
          <div
            className={`tip-button ${tipCheck(tip, selectedTip)}`}
            onClick={() => {
              setSelectedTips(tip);
            }}
            key={idx}
          >
            {tip}
          </div>
        ))}
      </div>
      <div className="second-tip-write-wrapper">
        <input
          placeholder="Enter custom amount"
          onChange={(e) => {
            setSelectedTips(e.target.value);
          }}
        />
      </div>
      <div className="first-button-wrapper">
        <button
          className={`first-next-button able`}
          onClick={() => {
            setStage(3);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const ThirdStage = () => {
  const history = useHistory();

  return (
    <>
      <div className="first-profile-wrapper">
        <div className="third-profile-photo"></div>
      </div>
      <div className="second-title-wrapper">
        <div className="second-title">Thank you for the review!</div>
        <div className="second-subtitle">It helps us find you more relevant driver.</div>
      </div>
      <div className="first-button-wrapper">
        <button
          className={`first-next-button able`}
          onClick={() => {
            history.push("/");
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

function RatePage() {
  const [stage, setStage] = useState(1);
  const [modalOpened, setModalOpened] = useState(false);
  const history = useHistory();

  function getContentByState(stage, setStage, setModalOpened) {
    switch (stage) {
      case 1:
        return <FirstStage stage={stage} setStage={setStage} setModalOpened={setModalOpened} />;
      case 2:
        return <SecondStage stage={stage} setStage={setStage} />;
      case 3:
        return <ThirdStage />;
      default:
        return <></>;
    }
  }
  return (
    <div className="rate-page-wrapper">
      <div className="pop-up-card">
        {stage !== 3 && (
          <div
            className="close-button-wrapper"
            onClick={() => {
              history.push("/main");
            }}
          >
            <CloseIcon />
          </div>
        )}
        {getContentByState(stage, setStage, setModalOpened)}
      </div>
      {modalOpened && <DetailRideModal setModalOpened={setModalOpened} />}
    </div>
  );
}

export default RatePage;

//팝업 닫거나 평가 끝나면 메인페이지로

const CloseIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#323232" />
    </svg>
  );
};

const StarIcon = ({ fill = "none" }) => {
  return (
    <svg width="44" height="42" viewBox="0 0 44 42" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.03582 19.4042L10.0551 26.7215L7.8275 36.9214C7.60474 38.2518 8.05025 39.5822 9.16404 40.2475C9.60955 40.6909 10.2778 40.9127 10.9461 40.9127C11.3916 40.9127 11.8371 40.9127 12.2826 40.6909C12.2826 40.6909 12.5054 40.6909 12.5054 40.4692L21.6384 35.3692L30.7714 40.4692C30.7714 40.4692 30.9942 40.4692 30.9942 40.6909C32.108 41.1344 33.4445 41.1344 34.3355 40.4692C35.4493 39.804 35.8948 38.4736 35.6721 37.1431L33.4445 26.9432C34.3355 26.278 35.6721 24.9476 37.0086 23.6172L41.241 19.8476L41.4637 19.6259C42.3548 18.739 42.5775 17.4085 42.132 16.2999C41.6865 15.1912 40.7955 14.3042 39.4589 14.0825H39.2362L28.7666 12.9738L24.5342 3.43911C24.5342 3.43911 24.5342 3.21737 24.3115 3.21737C24.0887 1.66521 22.9749 1 21.8612 1C20.7474 1 19.6336 1.66521 18.9653 2.7739C18.9653 2.7739 18.9653 2.99563 18.7426 2.99563L14.5102 12.5303L4.04063 13.639H3.81788C2.70409 13.8607 1.59031 14.7477 1.1448 15.8564C0.92204 17.1868 1.1448 18.5172 2.03582 19.4042V19.4042Z"
        stroke="#A2A4AA"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
