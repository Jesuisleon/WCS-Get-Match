const hashtagDataList = [
  { value: "1vs1", label: "1vs1", versus: "1vs1" },
  { value: "3vs3", label: "3vs3", versus: "3vs3" },
  { value: "5vs5", label: "5vs5", versus: "5vs5" },
  { value: "INSIDE", label: "INSIDE", groundType: "INSIDE" },
  { value: "OUTSIDE", label: "OUTSIDE", groundType: "OUTSIDE" },
];

const MatchCardsInfos = [
  {
    time: "08:00 AM",
    date: "11/10/2022",
    versus: "3vs3",
    groundType: "INSIDE",
  },
  {
    time: "04:00 PM",
    date: "11/10/2022",
    versus: "3vs3",
    groundType: "OUTSIDE",
  },
  {
    time: "10:00 AM",
    date: "11/11/2022",
    versus: "5vs5",
    groundType: "OUTSIDE",
  },
  {
    time: "10:00 AM",
    date: "12/11/2022",
    versus: "1vs1",
    groundType: "OUTSIDE",
  },
  {
    time: "10:00 AM",
    date: "11/14/2022",
    versus: "1vs1",
    groundType: "OUTSIDE",
  },
  {
    time: "10:00 AM",
    date: "07/11/2022",
    versus: "1vs1",
    groundType: "OUTSIDE",
  },
];

const currentTime = new Date();
const currentDate = new Date();

const currentDateAndTime = new Date(
  `${currentDate.toLocaleDateString("en-US")} 
   ${currentTime.toLocaleTimeString("en-US", {
     hour: "2-digit",
     minute: "2-digit",
   })}`
);
currentDateAndTime;

const time = "04:00 PM";
const date = "11/10/2022";
const filterDateTime = new Date(date + " " + time);
filterDateTime;

const FilterTime = (cards, time) => {
  return cards.filter((card) => {
    return new Date(card.time + " " + card.date) >= time;
  });
};

console.log(FilterTime(MatchCardsInfos, currentDateAndTime));

const GetHashtag = (cardsList, hashtag) => {
  // Make a new array with all types of keys used by hashtags
  const hashtagSelectedKeys = [
    ...new Set(
      hashtag
        .map((element) => {
          return Object.keys(element);
        })
        .flat()
    ),
  ].splice(2, 2);
  hashtagSelectedKeys;

  // Function to filter on a specific key of the card, with the values on the same specific keys of the hashtag
  const filterByKeys = (cards, keys) => {
    return hashtag.some((card) => cards[keys].includes(card[keys]));
  };

  // Function to filter the MatchCardsInfos
  const filteredCards = cardsList.filter((cards) => {
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
  return filteredCards;
};

console.log(
  GetHashtag(FilterTime(MatchCardsInfos, currentDateAndTime), [
    { value: "1vs1", label: "1vs1", versus: "1vs1" },
    { value: "3vs3", label: "3vs3", versus: "3vs3" },
    { value: "OUTSIDE", label: "OUTSIDE", groundType: "OUTSIDE" },
    { value: "INSIDE", label: "INSIDE", groundType: "INSIDE" },
  ])
);
