import React, { useState, useMemo } from "react";
import "../styles/RatePage.css";

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

const FirstStage = () => {
  return <></>;
};

const SecondStage = () => {
  return <></>;
};

const ThirdStage = () => {
  return <></>;
};

function RatePage() {
  const [stage, setStage] = useState(1);

  function getContentByState(stage, setStage) {
    switch (stage) {
      case 1:
        return <FirstStage />;
      case 2:
        return <SecondStage />;
      case 3:
        return <ThirdStage />;
      default:
        return <></>;
    }
  }
  return (
    <div className="rate-page-wrapper">
      <div className="pop-up-card">
        <div className="close-button-wrapper">
          <CloseIcon />
        </div>
        {getContentByState(stage, setStage)}
      </div>
    </div>
  );
}

export default RatePage;

//팝업 닫거나 평가 끝나면 메인페이지로
