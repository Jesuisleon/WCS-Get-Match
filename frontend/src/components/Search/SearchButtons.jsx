/* eslint no-nested-ternary: "off" */

import "./SearchButtons.css";
import { useState, useEffect, useContext } from "react";
import ReactSelect from "react-select";
import ModalCalendar from "@components/Calendar/ModalCalendar";
import TimerPicker from "@components/TimerPicker";
import CityPicker from "@components/CityPicker";
import CalendarPicker from "@components/Calendar/CalendarPicker";
import { MatchListContext } from "../../data/MatchListContext";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import HashtagList from "../../data/HashtagList";

function HashtagBar({ onChange }) {
  const [hashtagBarSearch, SethashtagBarSearch] = useState();

  const handleChange = (selectedHashtag) => {
    SethashtagBarSearch(selectedHashtag);
    onChange(selectedHashtag);
  };

  const styles = {
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      background: isFocused ? "#ef7f4d" : isSelected ? "#ef7f4d" : undefined,
      zIndex: 1,
      borderRadius: "1rem",
    }),

    container: (base) => ({
      ...base,
      width: "360px",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "1rem",
      fontSize: "0.8rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }),
    control: (base) => ({
      ...base,
      padding: "0.1rem",
    }),
    multiValue: (base) => ({
      ...base,
      fontSize: "1rem",
      padding: "0.1rem",
      backgroundColor: "rgba(20, 20, 20, 0.5)",
    }),
  };

  return (
    <div>
      <ReactSelect
        value={hashtagBarSearch}
        onChange={handleChange}
        options={HashtagList}
        isMulti
        autoFocus
        isSearchable
        styles={styles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: "orange", // background on select
            primary: "rgba(255, 255, 255, 0.2)", // border selected
            danger: "orange", // cross selected
            dangerLight: "rgba(49, 49, 51, 0.5)", // cross selected
            neutral0: "rgba(30, 30, 30, 1)", //  background container
            neutral10: "rgba(49, 49, 51, 0.2)", // background selected
            neutral20: "rgba(255, 255, 255, 0.2)", // borders unselected
            neutral50: "rgba(49, 49, 51, 1)", // placeholder
            neutral30: "rgba(49, 49, 51, 0.2)", // border hover
            neutral60: "white", // button when pick
            neutral80: "white", // hashtag text
          },
        })}
      />
    </div>
  );
}

export default function SearchButtons({
  viewCalendar,
  setViewCalendar,
  setMatchCardsList,
}) {
  const { refresh } = useContext(MatchListContext);

  const [cardsList, setCardsList] = useState([]);
  useEffect(() => {
    setMatchCardsList(cardsList);
  }, [cardsList]);

  const [city, setCity] = useState("NEW-YORK");
  const [hashtagList, setHashtagList] = useState([]);
  const [time, setTime] = useState(new Date());
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

    const FilterByCity = (cardsFilterByDate) => {
      return cardsFilterByDate.filter((card) => {
        return card.city === city;
      });
    };
    const FilterByHashtag = (cardsFilterByCityAndDate, hashtag) => {
      const hashtagSelectedKeys = [
        ...new Set(
          hashtag
            .map((element) => {
              return Object.keys(element);
            })
            .flat()
        ),
      ].filter((element, index) => index > 1);

      const filterKeysByHashtag = (cards, keys) => {
        return hashtag.some((card) => cards[keys].includes(card[keys]));
      };

      const FilterCards = cardsFilterByCityAndDate.filter((cards) => {
        if (hashtag.length === 0) return cards;

        if (hashtagSelectedKeys.length === 1)
          return filterKeysByHashtag(cards, hashtagSelectedKeys[0]);
        if (hashtagSelectedKeys.length === 2) {
          return (
            filterKeysByHashtag(cards, hashtagSelectedKeys[0]) &&
            filterKeysByHashtag(cards, hashtagSelectedKeys[1])
          );
        }
        if (hashtagSelectedKeys.length === 3) {
          return (
            filterKeysByHashtag(cards, hashtagSelectedKeys[0]) &&
            filterKeysByHashtag(cards, hashtagSelectedKeys[1]) &&
            filterKeysByHashtag(cards, hashtagSelectedKeys[2])
          );
        }
        return false;
      });
      return FilterCards;
    };
    setCardsList(
      FilterByHashtag(
        FilterByCity(FilterByDateAndTime(MatchCardsInfos, dateAndTime)),
        hashtagList
      )
    );
  }, [date, time, city, hashtagList, refresh]);

  return (
    <div className="search-container">
      <HashtagBar onChange={setHashtagList} />
      <div className="search-buttons">
        <TimerPicker time={time} setTime={setTime} />
        <CityPicker city={city} setCity={setCity} />
        <CalendarPicker date={date} setViewCalendar={setViewCalendar} />
        <ModalCalendar
          viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar}
          date={date}
          setDate={setDate}
        />
      </div>
    </div>
  );
}
