import "./MatchPage.css";
import React, { useState } from "react";
import MatchCards from "@components/MatchCards";
import HashtagBar from "@components/HashtagBar";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function MainPage() {
  const [matchCardsList, setMatchCardsList] = useState(MatchCardsInfos);

  return (
    <section className="match-page">
      <div className="logo-container">
        <img
          className="logo"
          src="src/img/mobile/logoGetMatch.png"
          alt="logo"
        />
      </div>
      <HashtagBar onChange={setMatchCardsList} />
      <div className="search-buttons">
        <div className="schedule">
          <img
            className="icons"
            src="src/img/icons/schedule-white.png"
            alt="schedule-icons"
          />
          <p>08:00 AM</p>
        </div>
        <div className="calendar">
          <img
            className="icons"
            src="src/img/icons/calendar-white.png"
            alt="calendar-icons"
          />
          <p>08/11/2024</p>
        </div>
      </div>
      <div className="cards-container">
        {matchCardsList.map((element, index) => (
          <MatchCards
            keys={index}
            img={element.groundType === "Inside" ? InsideCard : OutsideCard}
            time={element.time}
            versus={element.versus}
            date={element.date}
            city={element.city}
            playersLeft={element.playersLeft}
            groundType={element.groundType}
          />
        ))}
      </div>
      <div className="add-match-button">
        <p>ADD MATCH</p>
      </div>
    </section>
  );
}
