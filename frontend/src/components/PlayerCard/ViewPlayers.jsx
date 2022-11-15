import "./ViewPlayers.css";
import PlayerCard from "@components/PlayerCard/PlayerCard";
import PlayersInfos from "../../data/PlayersInfos";

export default function ViewPlayers() {
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
