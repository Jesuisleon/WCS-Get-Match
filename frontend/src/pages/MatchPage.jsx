import "./MatchPage.css";
import React, { useState } from "react";
import MatchCards from "@components/MatchCards";
import HashtagBar from "react-select";
import MatchCardsInfos from "../data/MatchCardsInfos";
import HashtagList from "../data/HashtagList";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function MainPage() {
  // Two hook for the hashtagbar :
  const [matchCardsList, setMatchCardsList] = useState(MatchCardsInfos); // To do a filter on cards before map them.
  const [hashtagBarSearch, SethashtagBarSearch] = useState(); // To keep them as values when users select a new hashtag.

  //  The function to filter cards with hashtag
  const FilterHashtag = (selectedOption) => {
    // Keep all hashtags and transform it on object with only the {keys : values} of the hashtag.
    const hashtag = selectedOption.filter((option) => {
      if (option.versus !== undefined) return { versus: option.versus };
      if (option.groundType !== undefined)
        return { groundType: option.groundType };
      return false;
    });

    // Make a new array with all types of keys used by hashtags
    const hashtagSelectedKeys = [
      ...new Set(
        hashtag
          .map((element) => {
            return Object.keys(element);
          })
          .flat()
      ),
    ];

    // Function to filter on a specific key of the card, with the values on the same specific keys of the hashtag
    const filterByKeys = (cards, keys) => {
      return hashtag.some((card) => cards[keys].includes(card[keys]));
    };
    // Function to filter the MatchCardsInfos
    const filteredCards = MatchCardsInfos.filter((cards) => {
      if (hashtag.length === 0) return cards; // To view all cards when nothing is on the hashtagBar
      if (hashtagSelectedKeys.length === 1)
        return filterByKeys(cards, hashtagSelectedKeys);
      if (hashtagSelectedKeys.length === 2) {
        return (
          filterByKeys(cards, hashtagSelectedKeys[0]) &&
          filterByKeys(cards, hashtagSelectedKeys[1])
        );
      }
      return false;
    });
    setMatchCardsList(filteredCards);
  };

  // When user put new input on HashtagBar :
  const handleChange = (selectedHashtag) => {
    SethashtagBarSearch(selectedHashtag); // to push the value on the hashtagBar,
    FilterHashtag(selectedHashtag); // and to do a filter wit the new input.
  };

  return (
    <section className="match-page">
      <div className="logo-container">
        <img
          className="logo"
          src="src/img/mobile/logoGetMatch.png"
          alt="logo"
        />
      </div>
      <HashtagBar
        className="hashtag-bar"
        value={hashtagBarSearch}
        onChange={handleChange}
        options={HashtagList}
        isMulti
        autoFocus
        isSearchable
        placeholder="#"
      />
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
