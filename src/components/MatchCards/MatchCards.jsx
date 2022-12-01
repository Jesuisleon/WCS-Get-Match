import "./MatchCards.css";
import React, { useContext } from "react";
import { MatchViewContext } from "../../data/MatchListContext";

export function CardTextElements({ value, color, icons }) {
  return (
    <div className="inline">
      <img className="icons" src={icons} alt={value} />
      <p className={color}>{value}</p>
    </div>
  );
}

export default function MatchCards({
  time,
  date,
  versus,
  img,
  city,
  playersLeft,
  toViewMatch,
}) {
  const { viewMatch } = useContext(MatchViewContext);

  return (
    <div
      onClick={toViewMatch}
      onKeyDown={toViewMatch}
      role="button"
      tabIndex={0}
      className={`match-card background-container ${!viewMatch && "not-open"}`}
    >
      <div className="image">
        <img src={img} alt="card-background" className="card-background" />
      </div>

      <div className="text">
        <CardTextElements
          value={city}
          color="white"
          icons="/img/icons/map-white.png"
        />
        <CardTextElements
          value={date}
          color="white"
          icons="/img/icons/calendar-white.png"
        />
        <CardTextElements
          value={time}
          color="white"
          icons="/img/icons/clock-white.png"
        />
        <CardTextElements
          value={versus}
          color="white"
          icons="/img/icons/player-white.png"
        />
        <CardTextElements
          value={`${playersLeft} Players Left`}
          color="white"
          icons="/img/icons/players-left-white.png"
        />
      </div>
    </div>
  );
}
