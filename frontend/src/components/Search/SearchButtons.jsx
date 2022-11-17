import "./SearchButtons.css";
import { useState, useEffect, useContext } from "react";
import ReactSelect from "react-select";
import { red } from "@mui/material/colors";
import HashtagList from "../../data/HashtagList";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import ModalCalendar from "./ModalCalendar";
import { MatchListContext } from "../../data/MatchListContext";

function HashtagBar({ onChange }) {
  const [hashtagBarSearch, SethashtagBarSearch] = useState();

  const handleChange = (selectedHashtag) => {
    SethashtagBarSearch(selectedHashtag);
    onChange(selectedHashtag);
  };

  const styles = {
    container: (base) => ({
      ...base,
      width: 360,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: red,
    }),
    control: (base) => ({
      ...base,
      backgroundColor: red,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: red,
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
        placeholder="#"
        styles={styles}
        // theme={(theme) => ({
        //   ...theme,
        //   borderRadius: 10,
        //   colors: {
        //     ...theme.colors,
        //     primary25: "orange", // background on select
        //     primary: "white", // border selected
        //     danger: "orange", // cross selected
        //     dangerLight: "gba(49, 49, 51, 0.5)", // cross selected
        //     neutral0: "rgba(49, 49, 51, 0.5)", //  background container
        //     neutral10: "rgba(49, 49, 51, 0.2)", // background selected
        //     neutral20: "rgba(49, 49, 51, 1)", // borders unselected
        //     neutral50: "rgba(49, 49, 51, 1)", // placeholder
        //     neutral30: "rgba(49, 49, 51, 0.2)", // border hover
        //     neutral60: "white", // button when pick
        //     neutral80: "white", // hashtag text
        //   },
        // })}
      />
    </div>
  );
}

export function Timer() {
  return (
    <div className="inline ">
      <img
        className="icons"
        src="src/img/icons/clock-white.png"
        alt="clock-icons"
      />
      <div className="select-dropdown borders-styled">
        <select className="select" aria-label="hours">
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span>:</span>
        <select className="select" aria-label="minutes">
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <span>:</span>
        <select className="select" aria-label="amp-pm">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      {/* <input
        onChange={handleChange}
        type="time"
        value={time.toLocaleTimeString("fr", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        placeholder={time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      /> */}
    </div>
  );
}

export function City({ city, setCity }) {
  const [defaultCity] = useState(city);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="inline ">
      <img
        className="icons"
        src="src/img/icons/map-white.png"
        alt="map-icons"
      />
      <div className="select-dropdown borders-styled">
        <select className="select" value={city} onChange={handleChange}>
          <option value={defaultCity}>{defaultCity}</option>
          <option value="BOSTON">BOSTON</option>
          <option value="CHICAGO">CHICAGO</option>
        </select>
      </div>
    </div>
  );
}

export function Calendar({ date, setViewCalendar }) {
  return (
    <div
      onClick={() => setViewCalendar(true)}
      onKeyDown={() => setViewCalendar(true)}
      role="button"
      tabIndex={0}
      className="inline "
    >
      <img
        className="icons"
        src="src/img/icons/calendar-white.png"
        alt="calendar-icons"
      />
      <p className="borders-styled">{date.toLocaleDateString("en-US")}</p>
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
        <Timer time={time} setTime={setTime} />
        <City city={city} setCity={setCity} />
        <Calendar date={date} setViewCalendar={setViewCalendar} />
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
