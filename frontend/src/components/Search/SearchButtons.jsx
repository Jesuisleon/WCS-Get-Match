import "./SearchButtons.css";
import { useState, useEffect } from "react";
import HashtagBar from "@components/Search/HashtagBar/HashtagBar";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import Calendar from "./Calendar/Calendar";

function SearchButtons({ viewCalendar, setViewCalendar, setMatchCardsList }) {
  const [cardsList, setCardsList] = useState([]);
  useEffect(() => {
    setMatchCardsList(cardsList);
  }, [cardsList]);

  const [hashtagList, setHashtagList] = useState([]);

  const [time] = useState(new Date());
  const [city] = useState("NEW-YORK");
  const [date, setDate] = useState(new Date());

  const dateAndTime = new Date(
    `${date.toLocaleDateString("en-US")} 
      ${time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}`
  );

  useEffect(() => {
    const FilterByDateAndTime = (cards, lastDate) => {
      return cards.filter((card) => {
        return new Date(`${card.time} ${card.date}`) >= lastDate;
      });
    };

    const FilterByHashtag = (cardsFilterByDateAndTime, hashtag) => {
      const hashtagSelectedKeys = [
        ...new Set(
          hashtag
            .map((element) => {
              return Object.keys(element);
            })
            .flat()
        ),
      ].splice(2, 2);

      const filterKeysByHashtag = (cards, keys) => {
        return hashtag.some((card) => cards[keys].includes(card[keys]));
      };

      const FilterCards = cardsFilterByDateAndTime.filter((cards) => {
        if (hashtag.length === 0) return cards;
        if (hashtagSelectedKeys.length === 1)
          return filterKeysByHashtag(cards, hashtagSelectedKeys);
        if (hashtagSelectedKeys.length === 2) {
          return (
            filterKeysByHashtag(cards, hashtagSelectedKeys[0]) &&
            filterKeysByHashtag(cards, hashtagSelectedKeys[1])
          );
        }
        return false;
      });
      return FilterCards;
    };
    setCardsList(
      FilterByHashtag(
        FilterByDateAndTime(MatchCardsInfos, dateAndTime),
        hashtagList
      )
    );
  }, [date, hashtagList]);

  return (
    <div className="search-container">
      <HashtagBar onChange={setHashtagList} />
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
          <p>{date.toLocaleDateString("en-US")}</p>
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
