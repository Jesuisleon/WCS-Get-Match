import "./IndexPage.css";

import { Link } from "react-scroll";

export default function IndexPage() {
  return (
    <div className="index-page">
      <div className="logo-container">
        <img className="logo" src="src/img/mobile/logo.png" alt="logo" />
      </div>
      <div className="title-text">
        <h1>GET THE MATCH YOU DESERVE</h1>
      </div>
      <div className="index-button">
        <Link to="main-page" spy smooth>
          <img
            src="src/img/mobile/polygon-button.png"
            alt="polygon-button"
            className="polygon-button"
          />
          <img
            src="src/img/mobile/arrow-logo.png"
            alt="arrow-logo"
            className="arrow-logo"
          />
        </Link>
      </div>
    </div>
  );
}
