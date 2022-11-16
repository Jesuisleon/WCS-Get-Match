import "./AddPlayersPage.css";
import PlayersInfos from "../../data/PlayersInfos";
import MatchCardsInfos from "../../data/MatchCardsInfos";

export function PlayersData({
  data,
  title,
  classNameAll,
  classNameTitle,
  classNameData,
}) {
  return (
    <div className={classNameAll}>
      <h2 className={classNameTitle}>{title}</h2>
      <p className={classNameData}>{data}</p>
    </div>
  );
}

export function PlayerCard({ avatar, name, age, city, onClick }) {
  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
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

function AddPlayersPage({ closeModalPlayers, matchId, team, playerPosition }) {

  const handleClick = (playerIndex) => {

    const PlayerPicked = PlayersInfos.findIndex((e) => e.id === playerIndex);
    MatchCardsInfos.find((e) => e.id === matchId)[team][playerPosition] =
      PlayersInfos[PlayerPicked];
    PlayersInfos.splice(PlayerPicked, 1);
    closeModalPlayers(false);
  };

  return (
    <div className="modalPlayersBackground">
      <div className="modalPlayersContenair">
        <button
          type="button"
          tabIndex={0}
          className="closeButton"
          onClick={() => closeModalPlayers(false)}
        >
          X
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
