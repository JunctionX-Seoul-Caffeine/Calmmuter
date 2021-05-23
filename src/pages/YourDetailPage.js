import React from "react";
import StatusBar from "../components/StatusBar";
import "../styles/YourDetailPage.css";
import "../styles/StatusBar.css";
import { Link } from "react-router-dom";

const YourDetailPage = () => {
  return (
    <div className="your-detail-page-wrapper">
      <StatusBar />
      <div className="your-detail-page-title-wrapper">
        <Link to="/main">
          <svg
            className="your-detail-svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5098 3.8701L15.7298 2.1001L5.83984 12.0001L15.7398 21.9001L17.5098 20.1301L9.37984 12.0001L17.5098 3.8701V3.8701Z"
              fill="#323232"
            />
          </svg>
        </Link>

        <div className="your-detail-page-title">Your Ride Summary</div>
      </div>
      <div className="your-detail-page-upper-wrapper">
        <img
          className="your-detail-page-roadmap"
          src={require("../assets/roadmap.png").default}
          alt=""
        />
        <div className="your-detail-page-upper-first-div">
          <div className="your-detail-page-upper-time">Today, 3:45pm</div>
          <div className="your-detail-page-upper-dollar">$13.5</div>
        </div>
        <div className="your-detail-page-upper-summary-text">20min, 1.1km</div>
        <hr className="your-detail-page-hr" />
        <div className="your-detail-page-upper-destination">
          <svg
            width="20"
            height="47"
            viewBox="0 0 20 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 37C10.9167 37 11.6667 36.25 11.6667 35.3333C11.6667 34.4167 10.9167 33.6667 10 33.6667C9.08337 33.6667 8.33337 34.4167 8.33337 35.3333C8.33337 36.25 9.08337 37 10 37ZM10 28.6667C13.5 28.6667 16.6667 31.35 16.6667 35.5C16.6667 38.15 14.625 41.2667 10.55 44.8583C10.2334 45.1333 9.75837 45.1333 9.44171 44.8583C5.37504 41.2667 3.33337 38.15 3.33337 35.5C3.33337 31.35 6.50004 28.6667 10 28.6667Z"
              fill="#FFCD4B"
            />
            <circle cx="10" cy="7" r="5" stroke="#646B71" stroke-width="4" />
            <rect x="9.5" y="15" width="1" height="13" fill="#C4C4C4" />
          </svg>
          <div className="your-detail-page-upper-destination-text-wrapper">
            <div className="your-detail-page-upper-destination-text">
              41 Sharon ST, Sanfransico, CA, 94113
            </div>
            <div className="your-detail-page-upper-destination-text">
              Baker Street, Sanfransico, CA
            </div>
          </div>
        </div>
        <div className="your-detail-page-upper-your-request">Your Request</div>
        <div className="your-detail-page-upper-request-badge-wrapper">
          <img
            className="your-detail-page-upper-request-badge"
            src={require("../assets/disabled_arms.png").default}
            alt=""
          />
          <img
            className="your-detail-page-upper-request-badge"
            src={require("../assets/pregnancy.png").default}
            alt=""
          />
        </div>
        <hr className="your-detail-page-hr" />
        <div className="your-detail-page-upper-recent-rated">
          <img
            className="your-detail-page-upper-recent-rated-face"
            src={require("../assets/kelvin.png").default}
            alt=""
          />
          <div className="your-detail-page-upper-recent-rated-text">
            You rated Kelvin
          </div>
          <div className="your-detail-page-upper-recent-rated-star-wrapper">
            <svg
              className="your-detail-page-upper-recent-rated-star"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8438 0.337924L9.76619 4.21414C9.87299 4.32182 9.97979 4.42949 10.1934 4.53716L14.3586 5.1832C14.7857 5.29087 14.9993 5.82924 14.6789 6.15225L11.6886 9.16709C11.5818 9.27476 11.475 9.49011 11.5818 9.59778L12.3294 13.797C12.4362 14.2277 11.9022 14.5507 11.5818 14.3354L7.8438 12.3973C7.737 12.2896 7.52341 12.2896 7.30981 12.3973L3.57184 14.3354C3.14464 14.5507 2.71744 14.2277 2.82424 13.797L3.57184 9.59778C3.57184 9.38244 3.57184 9.27476 3.46504 9.16709L0.154265 5.93691C-0.166132 5.61389 0.0474662 5.07553 0.474663 5.07553L4.63983 4.42949C4.85343 4.42949 4.96023 4.32182 5.06703 4.10647L6.98941 0.230252C7.09621 -0.0927668 7.737 -0.0927666 7.8438 0.337924Z"
                fill="#333333"
              />
            </svg>
            <svg
              className="your-detail-page-upper-recent-rated-star"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8438 0.337924L9.76619 4.21414C9.87299 4.32182 9.97979 4.42949 10.1934 4.53716L14.3586 5.1832C14.7857 5.29087 14.9993 5.82924 14.6789 6.15225L11.6886 9.16709C11.5818 9.27476 11.475 9.49011 11.5818 9.59778L12.3294 13.797C12.4362 14.2277 11.9022 14.5507 11.5818 14.3354L7.8438 12.3973C7.737 12.2896 7.52341 12.2896 7.30981 12.3973L3.57184 14.3354C3.14464 14.5507 2.71744 14.2277 2.82424 13.797L3.57184 9.59778C3.57184 9.38244 3.57184 9.27476 3.46504 9.16709L0.154265 5.93691C-0.166132 5.61389 0.0474662 5.07553 0.474663 5.07553L4.63983 4.42949C4.85343 4.42949 4.96023 4.32182 5.06703 4.10647L6.98941 0.230252C7.09621 -0.0927668 7.737 -0.0927666 7.8438 0.337924Z"
                fill="#333333"
              />
            </svg>
            <svg
              className="your-detail-page-upper-recent-rated-star"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8438 0.337924L9.76619 4.21414C9.87299 4.32182 9.97979 4.42949 10.1934 4.53716L14.3586 5.1832C14.7857 5.29087 14.9993 5.82924 14.6789 6.15225L11.6886 9.16709C11.5818 9.27476 11.475 9.49011 11.5818 9.59778L12.3294 13.797C12.4362 14.2277 11.9022 14.5507 11.5818 14.3354L7.8438 12.3973C7.737 12.2896 7.52341 12.2896 7.30981 12.3973L3.57184 14.3354C3.14464 14.5507 2.71744 14.2277 2.82424 13.797L3.57184 9.59778C3.57184 9.38244 3.57184 9.27476 3.46504 9.16709L0.154265 5.93691C-0.166132 5.61389 0.0474662 5.07553 0.474663 5.07553L4.63983 4.42949C4.85343 4.42949 4.96023 4.32182 5.06703 4.10647L6.98941 0.230252C7.09621 -0.0927668 7.737 -0.0927666 7.8438 0.337924Z"
                fill="#333333"
              />
            </svg>
            <svg
              className="your-detail-page-upper-recent-rated-star"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8438 0.337924L9.76619 4.21414C9.87299 4.32182 9.97979 4.42949 10.1934 4.53716L14.3586 5.1832C14.7857 5.29087 14.9993 5.82924 14.6789 6.15225L11.6886 9.16709C11.5818 9.27476 11.475 9.49011 11.5818 9.59778L12.3294 13.797C12.4362 14.2277 11.9022 14.5507 11.5818 14.3354L7.8438 12.3973C7.737 12.2896 7.52341 12.2896 7.30981 12.3973L3.57184 14.3354C3.14464 14.5507 2.71744 14.2277 2.82424 13.797L3.57184 9.59778C3.57184 9.38244 3.57184 9.27476 3.46504 9.16709L0.154265 5.93691C-0.166132 5.61389 0.0474662 5.07553 0.474663 5.07553L4.63983 4.42949C4.85343 4.42949 4.96023 4.32182 5.06703 4.10647L6.98941 0.230252C7.09621 -0.0927668 7.737 -0.0927666 7.8438 0.337924Z"
                fill="#333333"
              />
            </svg>
            <svg
              className="your-detail-page-upper-recent-rated-star"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.01055 1.33792L10.9329 5.21414C11.0397 5.32182 11.1465 5.42949 11.3601 5.53716L15.5253 6.1832C15.9525 6.29087 16.1661 6.82924 15.8457 7.15225L12.8553 10.1671C12.7485 10.2748 12.6417 10.4901 12.7485 10.5978L13.4961 14.797C13.6029 15.2277 13.0689 15.5507 12.7485 15.3354L9.01055 13.3973C8.90375 13.2896 8.69015 13.2896 8.47656 13.3973L4.73859 15.3354C4.31139 15.5507 3.88419 15.2277 3.99099 14.797L4.73859 10.5978C4.73859 10.3824 4.73859 10.2748 4.63179 10.1671L1.32101 6.93691C1.00062 6.61389 1.21421 6.07553 1.64141 6.07553L5.80658 5.42949C6.02018 5.42949 6.12698 5.32182 6.23377 5.10647L8.15616 1.23025C8.26296 0.907233 8.90375 0.907233 9.01055 1.33792Z"
                stroke="#A2A4AA"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="your-detail-page-your-benefits">Your Benefits</div>
      <div className="your-detail-page-your-benefits-description">
        How more comfortable your drive was
        <br />
        than other average drives
      </div>
      <div className="your-detail-page-your-benefits-statistic">
        <div className="your-detail-page-your-benefits-grid">
          <div className="your-detail-page-your-benefits-grid-title">
            Speed Stability
          </div>
          <div className="your-detail-page-your-benefits-grid-percent">
            +20%
          </div>
          <div className="your-detail-page-your-benefits-grid-distance">
            Our Driver. 36km/h
          </div>
          <div className="your-detail-page-your-benefits-grid-distance-avg">
            Avg. 30km/h
          </div>
        </div>
        <div className="your-detail-page-your-benefits-grid-space" />
        <div className="your-detail-page-your-benefits-grid">
          <div className="your-detail-page-your-benefits-grid-title">
            Sharp turns
          </div>
          <div className="your-detail-page-your-benefits-grid-percent">
            -10%
          </div>
          <div className="your-detail-page-your-benefits-grid-distance">
            Our Driver. 18%
          </div>
          <div className="your-detail-page-your-benefits-grid-distance-avg">
            Avg. 20%
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDetailPage;
