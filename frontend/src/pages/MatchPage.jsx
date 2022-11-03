import "./MatchPage.css";
import MatchCards from "@components/MatchCards";
import { useState } from "react";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";
import MatchCardsInfos from "../data/MatchCardsInfos";
import Calendar from "../components/Calendar";

export default function MainPage() {
  const [viewCalendar, setViewCalendar] = useState(false);

  return (
    <section className="match-page">
      <div className="logo-container">
        <img
          className="logo"
          src="src/img/mobile/logoGetMatch.png"
          alt="logo"
        />
      </div>
      <div className="hashtag-bar" />
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
        {MatchCardsInfos.map((element, index) => (
          <MatchCards
            keys={index}
            img={element.groundType === "INSIDE" ? InsideCard : OutsideCard}
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
