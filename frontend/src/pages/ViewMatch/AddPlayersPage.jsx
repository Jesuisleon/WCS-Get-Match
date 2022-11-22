import CloseButton from "@assets/CloseButton";
import { PlayersInfos } from "../../data/PlayersInfos";
import MatchCardsInfos from "../../data/MatchCardsInfos";

export function PlayersData({ data, title, className }) {
  return (
    <div className={`inline ${className}`}>
      <h3>{title}</h3>
      <p className="player-name">{data}</p>
    </div>
  );
}

export function PlayerCard({ avatar, name, age, city, onClick }) {
  return (
    <div
      className="background-container"
      style={{ padding: "1rem", margin: "1rem" }}
    >
      <div
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
        className="inline"
      >
        <div className="player-container">
          <img className="player-avatar" src={avatar} alt="avatar" />
        </div>
        <div className="player-card-container">
          <PlayersData data={name} title="NAME:" className="player-card-name" />
          <PlayersData data={age} title="AGE:" className="player-card-age" />
          <PlayersData data={city} title="FROM:" className="player-card-city" />
        </div>
      </div>
    </div>
  );
}

function AddPlayersPage({ closeModalPlayers, matchId, team, playerPosition }) {
  const handleClick = (playerIndex) => {
    const PlayerPicked = PlayersInfos.findIndex((e) => e.id === playerIndex);
    const MatchCard = MatchCardsInfos.find((e) => e.id === matchId);
    MatchCard[team][playerPosition] = PlayersInfos[PlayerPicked];
    PlayersInfos.splice(PlayerPicked, 1);
    MatchCard.playersLeft -= 1;
    closeModalPlayers(false);
  };

  return (
    <div className="modal-background">
      <div
        className="modal-container background-container"
        style={{ padding: "0.7rem" }}
      >
        <CloseButton onClick={() => closeModalPlayers(false)} />
        <div className="background-players">
          {PlayersInfos.map((player) => (
            <PlayerCard
              key={player.id}
              onClick={() => handleClick(player.id)}
              name={player.name}
              age={player.age}
              city={player.from}
              avatar={player.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddPlayersPage;
