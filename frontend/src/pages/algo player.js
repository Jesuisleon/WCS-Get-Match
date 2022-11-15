const MatchCardsInfos = [
  {
    id: "1",
    city: "NEW-YORK",
    adress: "31000 Toulouse 52 rue des blanchers",
    date: "11/12/2022",
    time: "08:00 AM",
    versus: "3vs3",
    maxPlayers: 6,
    team1: [
      {
        id: "1",
        name: "Pascal",
        age: "12",
        from: "Paris",
        avatar:
          "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630173.png",
        isOpen: false,
      },
      {
        id: "2",
        name: "",
        age: "",
        from: "",
        avatar: "",
        isOpen: true,
      },
      {
        id: "3",
        name: "",
        age: "",
        from: "",
        avatar: "",
        isOpen: true,
      },
    ],
    team2: [
      {
        name: "Pascal",
        age: "12",
        from: "Paris",
        avatar: "url",
        isOpen: false,
      },
      {
        name: "Bernard",
        age: "12",
        from: "Paris",
        avatar: "url",
        isOpen: false,
      },
      {
        name: "",
        age: "",
        from: "",
        avatar: "",
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

MatchCardsInfos[0].team1[1] = PlayersInfos[1];
delete PlayersInfos[0];

console.log(MatchCardsInfos);
console.log(PlayersInfos);
