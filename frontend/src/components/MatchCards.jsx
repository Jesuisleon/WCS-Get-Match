import "./MatchCards.css";
import { useState } from "react";
import ViewMatch from "./ViewMatch";
import { CardTextElements } from "./CardTextElements";

export default function MatchCards({ time, versus, img, city, playersLeft }) {
  const [openViewMatch, setOpenViewMatch] = useState(false);
  return (
    <div
      onClick={() => setOpenViewMatch(true)}
      onKeyDown={() => setOpenViewMatch(true)}
      role="button"
      tabIndex={0}
      className="match-card"
    >
      <div className="image">
        <img src={img} alt="card-background" className="card-background" />
      </div>
      <div className="text">
        <div className="city inline">
          <img
            className="icons"
            src="src/img/icons/localisation-white.png"
            alt="localisation-icons"
          />
          <p className="city">{city}</p>
        </div>
        <div className="time inline">
          <img
            className="icons"
            src="src/img/icons/schedule-grey.png"
            alt="schedule-icons"
          />
          <p className="time grey">{time}</p>
        </div>
        <div className="versus inline">
          <img
            className="icons"
            src="src/img/icons/versus-grey.png"
            alt="versus-icons"
          />
          <p className="versus grey">{versus}</p>
        </div>
        <div className="player-left inline">
          <img
            className="icons"
            src="src/img/icons/players-left-grey.png"
            alt="playersleft-icons"
          />
          <p className="player-left-text grey">{playersLeft}</p>
        </div>
      </div>

      <div className="text">
        <ViewMatch openViewMatch={openViewMatch} onClose={setOpenViewMatch} />
      </div>
      <CardTextElements
        value={city}
        color="white"
        icons="src/img/icons/localisation-white.png"
      />
      <CardTextElements
        value={time}
        color="grey"
        icons="src/img/icons/schedule-grey.png"
      />
      <CardTextElements
        value={versus}
        color="grey"
        icons="src/img/icons/versus-grey.png"
      />
      <CardTextElements
        value={playersLeft}
        color="grey"
        icons="src/img/icons/players-left-grey.png"
      />
    </div>
  );
}
