import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/MainPage.css";
import StatusBar from "../components/StatusBar";

const MainPage = ({ setDestination, username }) => {
  const history = useHistory();

  const [pressEnter, setPressEnter] = useState(false);

  const handleKeyPress = (e) => {
    setPressEnter(true);
    if (e.key === "Enter") {
      history.push("/input-destination");
    }
  };

  return (
    <>
      <div className="map">
        <StatusBar />
        <div className="user-avatar"></div>
        <h1 className="title">{username}, where to?</h1>
        <div className="searchbar-wrapper">
          <DirectionIcon />
          <input
            className="searchbar"
            placeholder="Type your destination"
            onKeyPress={handleKeyPress}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="locator-button">
          <LocatorIcon />
        </div>
        <div className="oval"></div>
        <div className="pin"></div>
        <CarA3 idx={1} />
        <CarA3 idx={2} />
        <CarA3 idx={3} />
        {pressEnter && (
          <div className="main-page-press-enter">Press Enter!</div>
        )}
      </div>
    </>
  );
};

export default MainPage;

const DirectionIcon = () => {
  return (
    <div className="direct-icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4299 10.5899L13.4199 1.57993C12.6699 0.829928 11.3499 0.819928 10.5899 1.57993L1.58988 10.5799C0.809883 11.3599 0.809883 12.6199 1.58988 13.3999L10.5899 22.3999C10.9799 22.7899 11.4899 22.9799 11.9999 22.9799C12.5099 22.9799 13.0199 22.7899 13.4099 22.3999L22.3999 13.4099C23.1899 12.6499 23.1999 11.3899 22.4299 10.5899V10.5899ZM12.0099 20.9899L3.00988 11.9899L12.0099 2.98993L21.0099 11.9899L12.0099 20.9899V20.9899ZM7.99988 10.9999V14.9999H9.99988V11.9999H13.9999V14.4999L17.4999 10.9999L13.9999 7.49993V9.99993H8.99988C8.44988 9.99993 7.99988 10.4499 7.99988 10.9999Z"
          fill="#A2A4AA"
        />
      </svg>
    </div>
  );
};

const CarA3 = ({ idx }) => {
  return (
    <div className={`car-a3-${idx}`}>
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.0933 38.0309L41.178 35.1948C41.7922 34.9492 42.1957 34.3545 42.1965 33.6924V31.5483L34.0933 34.7897V38.0309Z"
          fill="#A2A4AA"
        />
        <path
          d="M21.1278 38.0309V34.7896L13.0244 31.5483V33.6924C13.0252 34.3545 13.4288 34.9492 14.043 35.1948L21.1278 38.0309Z"
          fill="#A2A4AA"
        />
        <path
          d="M21.752 49.1551L24.43 50.3479C26.3909 51.2174 28.6091 51.2174 30.57 50.3479L33.248 49.1591C36.3282 47.7969 38.2213 44.5346 37.9438 41.0663L36.8527 27.4965L37.9735 13.571C38.2354 10.2778 36.5387 7.15074 33.6915 5.68163L33.0766 5.36318C29.5647 3.54561 25.4354 3.54561 21.9234 5.36318L21.3085 5.68163C18.4613 7.15074 16.7646 10.2778 17.0265 13.571L18.1473 27.4965L17.0562 41.0696C16.7818 44.5354 18.6741 47.7937 21.752 49.1551Z"
          fill="#A2A4AA"
        />
        <path
          d="M33.0947 38.2193L33.2962 38.0921C33.7827 37.78 34.0504 37.2332 33.9921 36.6712L33.2962 30H20.7008L20.0081 36.6712C19.9491 37.2325 20.2159 37.7792 20.7008 38.0921L20.8993 38.2193C24.5935 40.5936 29.3995 40.5936 33.0947 38.2193Z"
          fill="#333333"
        />
        <path
          d="M34.3235 18H20.6782L20.0233 14.0244C19.9048 13.3048 20.2459 12.5869 20.8761 12.2324L22.5297 11.3032C25.6204 9.56561 29.3796 9.56561 32.4703 11.3032L34.1239 12.2324C34.7541 12.5869 35.0952 13.3047 34.9767 14.0244L34.3235 18Z"
          fill="#333333"
        />
        <path
          d="M31.9856 46.5836L35.2271 43.8032L33.8784 43.2891L30.637 46.0695L31.9856 46.5836Z"
          fill="#333333"
        />
        <path
          d="M22.5327 46.5841L23.8813 46.0701L20.6399 43.2897L19.2913 43.8038L22.5327 46.5841Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
};

const LocatorIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
        fill="#646B71"
      />
    </svg>
  );
};
