import "./SearchButtons.css";
import { useState, useEffect } from "react";
import HashtagBar from "@components/Search/HashtagBar/HashtagBar";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import Calendar from "./Calendar/Calendar";

function SearchButtons({ viewCalendar, setViewCalendar, setMatchCardsList }) {
  const [date, setDate] = useState(new Date());
  const [time] = useState(new Date());
  const [city] = useState("TOULOUSE");

  useEffect(() => {
    const dateAndTime = new Date(
      `${date.toLocaleDateString("en-US")} ${time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}`
    );

    const FilterTime = (cards, lastDate) => {
      return cards.filter((card) => {
        return new Date(`${card.time} ${card.date}`) >= lastDate;
      });
    };
    setMatchCardsList(FilterTime(MatchCardsInfos, dateAndTime));
  }, [date]);

  return (
    <div className="search-container">
      <HashtagBar onChange={setMatchCardsList} />
      <div className="search-buttons">
        <div className="inline">
          <img
            className="icons"
            src="src/img/icons/schedule-white.png"
            alt="schedule-icons"
          />
          <p>
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="inline">
          <img
            className="icons"
            src="src/img/icons/localisation-white.png"
            alt="localisation-icons"
          />
          <p>{city}</p>
        </div>

        <div
          onClick={() => setViewCalendar(true)}
          onKeyDown={() => setViewCalendar(true)}
          role="button"
          tabIndex={0}
          className="inline"
        >
          <img
            className="icons"
            src="src/img/icons/calendar-white.png"
            alt="calendar-icons"
          />
          <p>{date.toLocaleDateString()}</p>
        </div>
        <Calendar
          viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar}
          date={date}
          setDate={setDate}
        />
      </div>
    </div>
  );
}

export default SearchButtons;
