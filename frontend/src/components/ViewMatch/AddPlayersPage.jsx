import "./AddPlayersPage.css";
import PlayersInfos from "../../data/PlayersInfos";

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

function PlayerCard({ avatar, name, age, city }) {
  return (
    <div role="button" tabIndex={0} className="Background-Player1">
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

export function ViewPlayers() {
  return (
    <section className="Card-ViewPlayer">
      <div className="Background-Players">
        {PlayersInfos.map((player) => (
          <PlayerCard
            avatar={player.avatar}
            name={player.name}
            age={player.age}
            city={player.from}
          />
        ))}
      </div>
    </section>
  );
}

function AddPlayers({ closeModalPlayers }) {
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
        <ViewPlayers />
      </div>
    </div>
  );
}

export default AddPlayers;
