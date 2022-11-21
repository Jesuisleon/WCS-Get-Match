import avatar1 from "../img/mobile/avatar1.png";
import avatar2 from "../img/mobile/avatar2.png";
import avatar3 from "../img/mobile/avatar3.png";

export const BlankInfos = {
  id: null,
  name: null,
  age: null,
  from: null,
  avatar: null,
  isOpen: true,
};

export const AdminInfos = {
  id: 100,
  name: "Jordan",
  age: 20,
  from: "NY",
  avatar:
    "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/893.png",
  isOpen: false,
};

export const PlayersInfos = [
  {
    id: 1,
    name: "Lebron Leon",
    age: 20,
    from: "NY",
    avatar: avatar1,
    isOpen: false,
  },
  {
    id: 2,
    name: "Magik Remy",
    age: 20,
    from: "LA",
    avatar: avatar2,
    isOpen: false,
  },
  {
    id: 3,
    name: "Jordan Jhon",
    age: 20,
    from: "Cleveland",
    avatar: avatar3,
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
    avatar: avatar1,
    isOpen: false,
  },
];

export default PlayersInfos;
