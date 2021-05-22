import React, { useState, useMemo } from "react";
import "../styles/StarPage.css";

const StarSvg = ({ fill = "none", width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 42" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.03582 19.4042L10.0551 26.7215L7.8275 36.9214C7.60474 38.2518 8.05025 39.5822 9.16404 40.2475C9.60955 40.6909 10.2778 40.9127 10.9461 40.9127C11.3916 40.9127 11.8371 40.9127 12.2826 40.6909C12.2826 40.6909 12.5054 40.6909 12.5054 40.4692L21.6384 35.3692L30.7714 40.4692C30.7714 40.4692 30.9942 40.4692 30.9942 40.6909C32.108 41.1344 33.4445 41.1344 34.3355 40.4692C35.4493 39.804 35.8948 38.4736 35.6721 37.1431L33.4445 26.9432C34.3355 26.278 35.6721 24.9476 37.0086 23.6172L41.241 19.8476L41.4637 19.6259C42.3548 18.739 42.5775 17.4085 42.132 16.2999C41.6865 15.1912 40.7955 14.3042 39.4589 14.0825H39.2362L28.7666 12.9738L24.5342 3.43911C24.5342 3.43911 24.5342 3.21737 24.3115 3.21737C24.0887 1.66521 22.9749 1 21.8612 1C20.7474 1 19.6336 1.66521 18.9653 2.7739C18.9653 2.7739 18.9653 2.99563 18.7426 2.99563L14.5102 12.5303L4.04063 13.639H3.81788C2.70409 13.8607 1.59031 14.7477 1.1448 15.8564C0.92204 17.1868 1.1448 18.5172 2.03582 19.4042V19.4042Z"
        stroke="#A2A4AA"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

const StarIcon = ({ fillColor }) => {
  return (
    <>
      <StarSvg fill={fillColor} width={44} height={42} />
    </>
  );
};

const Stars = ({ index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating }) => {
  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return "#767CEA"; // #ffdb58 === 노란색
    } else if (!hoverRating && rating >= index) {
      return "#767CEA"; // #ffdb58 === 노란색
    }
    return "#ffffff"; // #dcdcdc === 회색
  }, [rating, hoverRating, index]);

  return (
    <div className="stars" onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave()} onClick={() => onSaveRating(index)}>
      <StarIcon fillColor={fillColor} />
    </div>
  );
};

const StarCounter = ({ setStage }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    if (index <= 3) setHoverRating(index);
  };
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = (index) => {
    if (index <= 3) setHoverRating(0);
  };
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index) => {
    if (index <= 3) setRating(index);
    setStage(2);
  };
  // 클릭시, 별 인덱스를 스테이트에 저장.

  return (
    <>
      <div className="star-counter">
        {[1, 2, 3, 4, 5].map((idx) => {
          return <Stars index={idx} rating={rating} hoverRating={hoverRating} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSaveRating={onSaveRating} key={idx} />;
        })}
      </div>
    </>
  );
};

function StarPage() {
  return (
    <div className="star-page-wrapper">
      <div className="popup-card"></div>
    </div>
  );
}

export default StarPage;
