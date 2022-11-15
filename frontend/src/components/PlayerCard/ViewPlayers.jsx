import "./ViewPlayers.css";
import PlayerCard from "@components/PlayerCard/PlayerCard";
import PlayersInfos from "../../data/PlayersInfos";

export default function ViewPlayers({ playersPic, setPlayersPic }) {
  return (
    <section className="Card-ViewPlayer">
      <div className="Close-Button">
        <button className="closeButton" type="button">
          X
        </button>
      </div>
      <div className="Background-Players">
        {PlayersInfos.map((player) => (
          <PlayerCard
            playersPic={playersPic}
            setPlayersPic={setPlayersPic}
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
