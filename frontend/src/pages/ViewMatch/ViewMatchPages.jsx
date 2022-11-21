import "./ViewMatchPages.css";
import { useState } from "react";
import CloseButton from "@assets/CloseButton";
import AddPlayersPage from "./AddPlayersPage";
import MatchCards from "../../components/MatchCards/MatchCards";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import InsideCard from "../../img/mobile/inside-card.png";
import OutsideCard from "../../img/mobile/outside-card.png";

export function TeamPosition({
  setOpenModalPlayers,
  name,
  avatar,
  className,
  isOpen,
}) {
  if (isOpen === true) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={className}
        onClick={setOpenModalPlayers}
        onKeyDown={setOpenModalPlayers}
      >
        <div className="player-container">
          <img
            className="player-add"
            src="src/img/icons/add-player-white.png"
            alt="players"
          />
        </div>
      </div>
    );
  }
  if (isOpen === false) {
    return (
      <div role="button" tabIndex={0} className={className}>
        <div className="player-container">
          <img className="player-avatar" src={avatar} alt="players" />
        </div>
        <p className="player-name" style={{ transform: "translate(0, -10px)" }}>
          {name}
        </p>
      </div>
    );
  }
}

export default function ViewMatchPages({ viewMatch, onClose, matchId }) {
  if (!viewMatch) return null;
  const [openModalPlayers, setOpenModalPlayers] = useState(false);
  const [PlayerPosition, setPlayerPosition] = useState();
  const [Team, setTeam] = useState();

  let PlayersKeys = 0;
  function IncrementPlayersKeys() {
    PlayersKeys += 1;
    return PlayersKeys;
  }

  const handleClick = (index, team) => {
    setTeam(team);
    setPlayerPosition(index);
    setOpenModalPlayers(true);
  };

  return (
    <div className="modal-background">
      <div className="modal-container background-container view-teams">
        <CloseButton onClick={onClose} />
        <div className="team1">
          {MatchCardsInfos.filter((card) => card.id === matchId)
            .map((e) => e.team1)
            .flat()
            .map((player, index) => (
              <TeamPosition
                isOpen={player.isOpen}
                key={() => IncrementPlayersKeys()}
                className={`position${index} centered`}
                name={player.name}
                avatar={player.avatar}
                setOpenModalPlayers={() => {
                  handleClick(index, "team1");
                }}
              />
            ))}
        </div>
        <div className="field">
          {MatchCardsInfos.filter((card) => card.id === matchId).map((card) => (
            <MatchCards
              img={card.groundType === "Inside" ? InsideCard : OutsideCard}
              key={card.id}
              city={card.city}
              adress={card.adress}
              date={card.date}
              time={card.time}
              versus={card.versus}
              playersLeft={card.playersLeft}
              groundType={card.groundType}
              players={card.players}
            />
          ))}
        </div>
        <div className="team2">
          {MatchCardsInfos.filter((card) => card.id === matchId)
            .map((e) => e.team2)
            .flat()
            .map((player, index) => (
              <TeamPosition
                isOpen={player.isOpen}
                key={() => IncrementPlayersKeys()}
                className={`position${index} centered`}
                name={player.name}
                avatar={player.avatar}
                setOpenModalPlayers={() => {
                  handleClick(index, "team2");
                }}
              />
            ))}
        </div>
      </div>
      {openModalPlayers && (
        <AddPlayersPage
          closeModalPlayers={setOpenModalPlayers}
          matchId={matchId}
          team={Team}
          playerPosition={PlayerPosition}
        />
      )}
    </div>
  );
}
