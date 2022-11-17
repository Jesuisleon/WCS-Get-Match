import "./AddPlayersPage.css";
import PlayersInfos from "../../data/PlayersInfos";
import MatchCardsInfos from "../../data/MatchCardsInfos";

export function PlayersData({ data, title, className }) {
  return (
    <div className={`inline ${className}`}>
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
}

export function PlayerCard({ avatar, name, age, city, onClick }) {
  return (
    <div className="player-card-container">
      <div
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
        className="Background-Player"
      >
        <div className="player-image">
          <img className="player-img" src={avatar} alt="playerImg" />
        </div>
        <div className="player-card-text">
          <PlayersData data={name} title="NAME:" className="player-card-name" />
          <PlayersData data={age} title="AGE:" className="player-card-age" />
          <PlayersData data={city} title="CITY:" className="player-card-city" />
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
    <div className="modalPlayersBackground">
      <div className="modalPlayersContenair">
        <button
          type="button"
          tabIndex={0}
          className="close-button"
          onClick={() => closeModalPlayers(false)}
        >
          <img
            className="close-button"
            src="src/img/icons/close-white.png"
            alt="close-button"
          />
        </button>
        <section className="Card-ViewPlayer">
          <div className="Background-Players">
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
        </section>
      </div>
    </div>
  );
}

export default AddPlayersPage;
