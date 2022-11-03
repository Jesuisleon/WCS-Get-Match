const hashtagDataList = [
  { value: "1vs1", label: "1vs1", versus: "1vs1" },
  { value: "3vs3", label: "3vs3", versus: "3vs3" },
  { value: "5vs5", label: "5vs5", versus: "5vs5" },
  { value: "INSIDE", label: "INSIDE", groundType: "INSIDE" },
  { value: "OUTSIDE", label: "OUTSIDE", groundType: "OUTSIDE" },
];

const MatchCardsInfos = [
  {
    versus: "3vs3",
    groundType: "INSIDE",
  },
  {
    versus: "3vs3",
    groundType: "OUTSIDE",
  },
  {
    versus: "5vs5",
    groundType: "OUTSIDE",
  },
  {
    versus: "1vs1",
    groundType: "OUTSIDE",
  },
];

const FilterHashtag = (selectedOption) => {
  const hashtag = selectedOption.filter((option) => {
    if (option.versus !== undefined) return { versus: option.versus };
    else if (option.groundType !== undefined)
      return { groundType: option.groundType };
    return false;
  });

  let hashtagSelectedKeys = [
    ...new Set(
      hashtag
        .map((element) => {
          return Object.keys(element);
        })
        .flat()
    ),
  ];

  hashtagSelectedKeys.splice(0, 2);

  const filterByKeys = (cards, keys) => {
    return hashtag.some((card) => cards[keys].includes(card[keys]));
  };

  const filteredCards = MatchCardsInfos.filter((cards) => {
    if (hashtag.length === 0) return cards;
    else if (hashtagSelectedKeys.length === 1)
      return filterByKeys(cards, hashtagSelectedKeys);
    else if (hashtagSelectedKeys.length === 2) {
      return (
        filterByKeys(cards, hashtagSelectedKeys[0]) &&
        filterByKeys(cards, hashtagSelectedKeys[1])
      );
    }
    return false;
  });
  filteredCards;
};

// FilterHashtag([{ versus: "3vs3" }])
// FilterHashtag([{ versus: "3vs3" }, {versus:"5vs5"}])
FilterHashtag([
  { value: "1vs1", label: "1vs1", versus: "1vs1" },
  { value: "3vs3", label: "3vs3", versus: "3vs3" },
  { value: "OUTSIDE", label: "OUTSIDE", groundType: "OUTSIDE" },
]);
