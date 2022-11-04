import "./MatchPage.css";
import React, { useState } from "react";
import MatchCards from "@components/MatchCards";
import HashtagBar from "@components/HashtagBar";
import Calendar from "../components/Calendar";
import ViewMatch from "../components/ViewMatch";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function MainPage() {
  const [matchCardsList, setMatchCardsList] = useState(MatchCardsInfos);
  const [viewCalendar, setViewCalendar] = useState(false);
  const [openViewMatch, setOpenViewMatch] = useState(false);

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
        <div
          onClick={() => setViewCalendar(true)}
          onKeyDown={() => setViewCalendar(true)}
          className="calendar"
          role="button"
          tabIndex={0}
        >
          <img
            className="icons"
            src="src/img/icons/calendar-white.png"
            alt="calendar-icons"
          />
          <p>08/11/2024</p>
        </div>
        <Calendar
          viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar}
        />
      </div>
      <div className="cards-container">
        {matchCardsList.map((element, index) => (
          <MatchCards
            viewMatch={() => {setOpenViewMatch(true)}}
            keys={index}
            img={element.groundType === "Inside" ? InsideCard : OutsideCard}
            time={element.time}
            versus={element.versus}
            date={element.date}
            city={element.city}
            playersLeft={element.playersLeft}
            groundType={element.groundType}
            name={element.id}
          />
        ))}
      </div>
      <div className="add-match-button">
        <p>ADD MATCH</p>
      </div>
      <ViewMatch
        openViewMatch={openViewMatch}
        onClose={() => setOpenViewMatch(false)}
      />
    </section>
  );
}
