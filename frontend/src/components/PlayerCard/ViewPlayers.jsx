import React from "react";
import "./ViewPlayers.css";
import PlayerCard from "@components/PlayerCard/PlayerCard";

export default function ViewPlayers() {
  return (
    <section className="Card-ViewPlayer">
      <div className="Close-Button">
        <button className="closeButton" type="button">
          X
        </button>
      </div>
      <div className="Background-Players">
        <PlayerCard name="Lamelo Ball" age="23 years" city="Charlotte" />
        <PlayerCard name="Kevin Durant" age="32 years" city="Brooklyn" />
        <PlayerCard name="Steve Adams" age="29 years" city="Oklahoma" />
        <PlayerCard name="Stephen Curry" age="32 years" city="San Francisco" />
        <PlayerCard name="Lebron James" age="35 years" city="Los Angeles" />
      </div>
    </section>
  );
}
