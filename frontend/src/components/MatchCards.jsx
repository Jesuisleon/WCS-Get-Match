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
      <ViewMatch
        openViewMatch={openViewMatch}
        onClose={() => setOpenViewMatch(false)}
      />
    </div>
  );
}
