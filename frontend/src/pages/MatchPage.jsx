import "./MatchPage.css";
import React, { useState } from "react";
import SearchButtons from "@components/Search/SearchButtons";
import MatchCards from "@components/MatchCards/MatchCards";
import ViewMatchPage from "@pages/ViewMatchPages";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function MainPage() {
  const [matchCardsList, setMatchCardsList] = useState(MatchCardsInfos);
  const [viewCalendar, setViewCalendar] = useState(false);
  const [viewMatch, setViewMatch] = useState(false);
  const [matchId, setMatchId] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState("TOULOUSE");

  return (
    <section className="match-page">
      <div className="logo-container">
        <img
          className="logo"
          src="src/img/mobile/logoGetMatch.png"
          alt="logo"
        />
      </div>
      <SearchButtons
        time={time}
        setTime={setTime}
        city={city}
        setCity={setCity}
        date={date}
        setDate={setDate}
        viewCalendar={viewCalendar}
        setViewCalendar={setViewCalendar}
        onChange={setMatchCardsList}
      />
      <div className="cards-container">
        {matchCardsList.map((card) => (
          <MatchCards
            viewMatch={() => {
              setViewMatch(true);
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
        viewMatch={viewMatch}
        onClose={() => setViewMatch(false)}
      />
    </section>
  );
}
