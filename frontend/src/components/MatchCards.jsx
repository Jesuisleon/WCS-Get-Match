import "./MatchCards.css";
import ViewMatch from "./ViewMatch";
import { useState } from "react";

export default function MatchCards({
  time,
  versus,
  img,
  date,
  city,
  playersLeft,
  groundType,
}) {

const [openViewMatch, setOpenViewMatch] = useState(false)

  return (
    <div>
    <div onClick ={() => setOpenViewMatch(true)} className="match-card">
      <div className="right-contenair">
        <p className="time">{time}</p>
        <p className={versus === "3vs3" ? "versus-red" : "versus-blue"}>
          {versus}
        </p>
      </div>
      <img src={img} alt="card-background" className="image-background" />
      <div className="card-contenair">
        <div className="text-infos">
          <p className="date">{date} </p>
          <p className="city">{city}</p>
          <div className="players-left-container">
            <img
              className="logo-players"
              alt="logo-players-left"
              src="src/img/mobile/logo-players.png"
            />
            <p className="player-left-text">{playersLeft}</p>
          </div>
          <p className="ground-type">{groundType}</p>
        </div>
      </div>
    </div>
    <ViewMatch openViewMatch = {openViewMatch} onClose = {()=> setOpenViewMatch(false)}/>
    </div>
  );
}
