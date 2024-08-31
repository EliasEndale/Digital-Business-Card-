import React from "react";
import { Link } from "react-router-dom";
import profileLogo from "../Components/images/images.jpg"; // Adjust the path as necessary
import twitterLogo from "../Components/Images/Twitter Icon.png";
import instaLogo from "../Components/Images/Instagram Icon.png";
import youtubeLogo from "../Components/Images/youtube Icon.png";
import facebookLogo from "../Components/Images/Facebook Icon.png";
import emailLogo from "../Components/Images/Mail.jpg";
import LinkedinLogo from "../Components/Images/LinkedIn.png";
import QRCode from "react-qr-code"; // Import QRCode
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/home" className="nav-link text-white px-0 align-middle">
              <i className="fs-4 bi-speedometer2 ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Manage Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <header className="header">
          <div>
            <img src={profileLogo} alt="Profile" />
          </div>
          <h1>Addis Way</h1>
          <div>
            <h3>Business Card</h3>
            <h4>Full-stack Developers</h4>
            <p>Website Link Channel</p>
            <button
              onClick={() =>
                window.open("mailto:endaleelias824@gmail.com", "_blank")
              }
            >
              <img src={emailLogo} alt="Email" />
              Email
            </button>
            <button
              onClick={() => window.open("https://www.linkedin.com", "_blank")}
            >
              <img src={LinkedinLogo} alt="LinkedIn" />
              LinkedIn
            </button>
            <div>
              <h3>About</h3>
              <p>We are full-stack Developers</p>
              <h3>Interest</h3>
              <p>We are full-stack Developers</p>
            </div>
          </div>
          <div className="social-buttons">
            <button
              onClick={() => window.open("https://www.twitter.com", "_blank")}
            >
              <img src={twitterLogo} alt="Twitter" />
            </button>
            <button
              onClick={() => window.open("https://www.instagram.com", "_blank")}
            >
              <img src={instaLogo} alt="Instagram" />
            </button>
            <button
              onClick={() => window.open("https://www.youtube.com", "_blank")}
            >
              <img src={youtubeLogo} alt="YouTube" />
            </button>
            <button
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            >
              <img src={facebookLogo} alt="Facebook" />
            </button>
          </div>
          {/* QR Code Section */}
          <div className="qr-code-container">
            <QRCode
              size={40}
              bgColor="yellow"
              fgColor="black"
              value="http://192.168.172.120"
            />
          </div>
          <p>Join Us Then You Will Be A Strong Business Man</p>
        </header>
      </div>
    </div>
  );
};

export default App;
