import "./MatchPage.css";
import React, { useState } from "react";
import HashtagBar from "@components/HashtagBar/HashtagBar";
import Calendar from "../components/Calendar/Calendar";
import MatchCards from "@components/MatchCards/MatchCards";
import ViewMatchPage from "@pages/ViewMatchPages";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function MainPage() {
  const [matchCardsList, setMatchCardsList] = useState(MatchCardsInfos);
  const [viewCalendar, setViewCalendar] = useState(false);
  const [openViewMatch, setOpenViewMatch] = useState(false);
  const [matchId, setMatchId] = useState("");

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
        {matchCardsList.map((card) => (
          <MatchCards
            viewMatch={() => {
              setOpenViewMatch(true);
              setMatchId(card.id);
            }}
            img={card.groundType === "Inside" ? InsideCard : OutsideCard}
            key={card.id}
            city={card.city}
            date={card.date}
            time={card.time}
            versus={card.versus}
            playersLeft={card.playersLeft}
            groundType={card.groundType}
          />
        ))}
      </div>
      <div className="add-match-button">
        <p>ADD MATCH</p>
      </div>
      <ViewMatchPage
        matchId={matchId}
        openViewMatch={openViewMatch}
        onClose={() => setOpenViewMatch(false)}
      />
    </section>
  );
}
