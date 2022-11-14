import ReactSelect from "react-select";
import React, { useState } from "react";
import HashtagList from "../../../data/HashtagList";

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
