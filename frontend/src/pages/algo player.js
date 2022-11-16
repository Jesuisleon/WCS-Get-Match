const MatchCardsInfos = [
  {
    id: 1,
    city: "NEW-YORK",
    adress: "31000 Toulouse 52 rue des blanchers",
    date: "12/12/2022",
    time: "08:00 AM",
    versus: "3vs3",
    maxPlayers: "6",
    "team1": [
      {
        id: null,
        name: null,
        age: null,
        from: null,
        avatar: null,
        isOpen: true,
      },
      {
        id: 2,
        name: "Bernard",
        age: "122",
        from: "Paris",
        avatar:
          "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628389.png",
        isOpen: false,
      },
      {
        id: 3,
        name: "Jean-François",
        age: "12",
        from: "Perpignan",
        avatar:
          "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203500.png",
        isOpen: false,
      },
    ],
    "team2": [
      {
        id: 4,
        name: "Francis",
        age: "12",
        from: "Paris",
        avatar: "url",
        isOpen: false,
      },
      {
        id: 5,
        name: "Kevin",
        age: "12",
        from: "Paris",
        avatar: "url",
        isOpen: false,
      },
      {
        id: null,
        name: null,
        age: null,
        from: null,
        avatar: null,
        isOpen: true,
      },
    ],
    playersLeft: "3 players left",
    groundType: "Inside",
  },
];

const PlayersInfos = [
  {
    id: 1,
    name: "Lebron Leon",
    age: 20,
    from: "NY",
    avatar: "avatar1",
    isOpen: false,
  },
  {
    id: 2,
    name: "Magik Remy",
    age: 20,
    from: "LA",
    avatar: "avatar2",
    isOpen: false,
  },
  {
    id: 3,
    name: "Jordan Jhon",
    age: 20,
    from: "Cleveland",
    avatar: "avatar3",
    isOpen: false,
  },
  {
    id: 4,
    name: "Parker Lucas",
    age: 20,
    from: "Miami",
    avatar:
      "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png",
    isOpen: false,
  },
  {
    id: 5,
    Name: "Kobe Bryant",
    Age: 20,
    from: "Miami",
    avatar: "avatar1",
    isOpen: false,
  },
];

const matchId = 1;
const team = "team1";

MatchCardsInfos[0][team][0] = PlayersInfos[0];



console.log(
  PlayersInfos.splice( PlayersInfos.find((element) => element.id === 1), 1)
);

console.log(MatchCardsInfos);

console.log(
  MatchCardsInfos.filter((card) => card.id === matchId)
    .map((e) => e[team])
    .flat()
    .filter((player) => player.id === 2)
);

console.log(
  MatchCardsInfos.filter((card) => card.id === matchId)
    .map((e) => e[team][0])
    .map((e) => (e = PlayersInfos[0]))
);
