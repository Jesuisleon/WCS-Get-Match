import ReactSelect from "react-select";
import React, { useState } from "react";
import MatchCardsInfos from "../../../data/MatchCardsInfos";
import HashtagList from "../../../data/HashtagList";


function HashtagBar({ onChange }) {


  const [hashtagBarSearch, SethashtagBarSearch] = useState(); // To keep them as values when users select a new hashtag.

  //  The function to filter cards with hashtag
  const FilterHashtag = (selectedOption) => {
    // Keep all hashtags and transform it on object with only the {keys : values} of the hashtag.
    const hashtag = selectedOption.filter((option) => {
      if (option.versus !== undefined) return { versus: option.versus };
      if (option.groundType !== undefined) return { groundType: option.groundType };
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

    hashtagSelectedKeys.splice(0, 2);

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
    onChange(filteredCards);
  };

  // When user put new input on HashtagBar :
  const handleChange = (selectedHashtag) => {
    SethashtagBarSearch(selectedHashtag); // to push the value on the hashtagBar,
    FilterHashtag(selectedHashtag); // and to do a filter wit the new input.
  };

  // Styles-Content_Hashtag-Bar
  const styles = {
    container: (base) => ({
      ...base,
      width: 360,
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
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: "orange", // background on select
            primary: "white", // border selected
            danger: "orange", // cross selected
            dangerLight: "gba(49, 49, 51, 0.5)", // cross selected
            neutral0: "rgba(49, 49, 51, 0.5)", //  background container
            neutral10: "rgba(49, 49, 51, 0.2)", // background selected
            neutral20: "rgba(49, 49, 51, 1)", // borders unselected
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
export default HashtagBar;
