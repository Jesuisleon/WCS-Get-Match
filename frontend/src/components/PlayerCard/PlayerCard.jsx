import PlayersData from "./PlayersData";

function PlayerCard({ avatar, name, age, city, setPlayersPic }) {
  const playersGrap = () => {
    setPlayersPic(avatar);
  };

  return (
    <div
      onClick={playersGrap}
      onKeyDown={playersGrap}
      role="button"
      tabIndex={0}
      className="Background-Player1"
    >
      <div className="player-image">
        <img className="player-img" src={avatar} alt="playerImg" />
      </div>
      <div className="player-CardText">
        <PlayersData
          data={name}
          title="Name"
          classNameAll="player-All-Text-Name"
          classNameTitle="player-TitleName"
          classNameData="player-Name"
        />
        <PlayersData
          data={age}
          title="Age"
          classNameAll="player-All-Text-Age"
          classNameTitle="player-TitleAge"
          classNameData="player-Age"
        />
        <PlayersData
          data={city}
          title="City"
          classNameAll="player-All-Text-City"
          classNameTitle="player-TitleCity"
          classNameData="player-City"
        />
      </div>
    </div>
  );
}

export default PlayerCard;
