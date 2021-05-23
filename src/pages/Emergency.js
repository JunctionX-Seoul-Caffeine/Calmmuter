import React from "react";
import StatusBar from "../components/StatusBar";
import "../styles/Emergency.css";
import { Link } from "react-router-dom";

const Emergency = () => {
  return (
    <>
      <div className="modal-overlay">
        <StatusBar />
        <div className="emergency-modal">
          <Link to="/rate">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#333333"
              />
            </svg>
          </Link>

          <svg
            className="emergency-icon"
            width="50"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="25" cy="24.5" rx="25" ry="24.5" fill="#FF7474" />
            <path
              d="M34.375 16.0781H29.6875V13.7812C29.6875 12.518 28.6328 11.4844 27.3438 11.4844H22.6562C21.3672 11.4844 20.3125 12.518 20.3125 13.7812V16.0781H15.625C14.3359 16.0781 13.2812 17.1117 13.2812 18.375V32.1562C13.2812 33.4195 14.3359 34.4531 15.625 34.4531H34.375C35.6641 34.4531 36.7188 33.4195 36.7188 32.1562V18.375C36.7188 17.1117 35.6641 16.0781 34.375 16.0781ZM22.6562 13.7812H27.3438V16.0781H22.6562V13.7812ZM28.5156 26.4141H26.1719V28.7109C26.1719 29.3426 25.6445 29.8594 25 29.8594C24.3555 29.8594 23.8281 29.3426 23.8281 28.7109V26.4141H21.4844C20.8398 26.4141 20.3125 25.8973 20.3125 25.2656C20.3125 24.634 20.8398 24.1172 21.4844 24.1172H23.8281V21.8203C23.8281 21.1887 24.3555 20.6719 25 20.6719C25.6445 20.6719 26.1719 21.1887 26.1719 21.8203V24.1172H28.5156C29.1602 24.1172 29.6875 24.634 29.6875 25.2656C29.6875 25.8973 29.1602 26.4141 28.5156 26.4141Z"
              fill="white"
            />
          </svg>
          <h4>Emergency Taxi</h4>
          <div>
            Drivers with Emergency Taxi mark took a special program for
            emergency situations and knows nearby emergency hospitals.
          </div>
          <div>
            Tip. They are volunteering for this service so leave some tips for a
            little gratitude!
          </div>
        </div>
      </div>
    </>
  );
};

export default Emergency;
