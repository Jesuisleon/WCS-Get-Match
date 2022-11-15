import "./ViewPlayers.css";
import PlayerCard from "@components/PlayerCard/PlayerCard";

export default function ViewPlayers({ playersPic, setPlayersPic }) {
  return (
    <section className="Card-ViewPlayer">
      <div className="Close-Button">
        <button className="closeButton" type="button">
          X
        </button>
      </div>
      <div className="Background-Players">
        <PlayerCard
          playersPic={playersPic}
          setPlayersPic={setPlayersPic}
          avatar="src/img/mobile/Avatar-player.png"
          name="Lamelo Ball"
          age="23 years"
          city="Charlotte"
        />
        <PlayerCard
          playersPic={playersPic}
          setPlayersPic={setPlayersPic}
          avatar="src/img/mobile/Avatar-player.png"
          name="Kevin Durant"
          age="32 years"
          city="Brooklyn"
        />
        <PlayerCard
          playersPic={playersPic}
          setPlayersPic={setPlayersPic}
          avatar="src/img/mobile/Avatar-player.png"
          name="Steve Adams"
          age="29 years"
          city="Oklahoma"
        />
        <PlayerCard
          playersPic={playersPic}
          setPlayersPic={setPlayersPic}
          avatar="src/img/mobile/Avatar-player.png"
          name="Stephen Curry"
          age="32 years"
          city="San Francisco"
        />
        <PlayerCard
          playersPic={playersPic}
          setPlayersPic={setPlayersPic}
          avatar="src/img/mobile/Avatar-player.png"
          name="Lebron James"
          age="35 years"
          city="Los Angeles"
        />
      </div>
    </section>
  );
}
