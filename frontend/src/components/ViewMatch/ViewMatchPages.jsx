import "./ViewMatchPages.css";
import { useState } from "react";
import AddPlayersPage from "@components/ViewMatch/AddPlayersPage";
import MatchCards from "@components/MatchCards/MatchCards";
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
  if (isOpen === false) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={`players-container  ${className}`}
      >
        <div className="avatar-container">
          <img className="avatar-player" src={avatar} alt="players" />
        </div>
        <p className="players-name">{name}</p>
      </div>
    );
  }
  return (
    <div
      role="button"
      tabIndex={0}
      className={`players-container  ${className}`}
      onClick={setOpenModalPlayers}
      onKeyDown={setOpenModalPlayers}
    >
      <div className="avatar-container">
        <img
          className="add-player"
          src="src/img/icons/add-player-white.png"
          alt="players"
        />
      </div>
    </div>
  );
}

export default function ViewMatchPages({ viewMatch, onClose, matchId }) {
  if (!viewMatch) return null;
  const [openModalPlayers, setOpenModalPlayers] = useState(false);
  const [PlayerPosition, setPlayerPosition] = useState();
  const [Team, setTeam] = useState();

  const handleClick = (index, team) => {
    setTeam(team);
    setPlayerPosition(index);
    setOpenModalPlayers(true);
  };

  return (
    <div className="viewback">
      <div className="modal-viewMatch">
        {openModalPlayers && (
          <AddPlayersPage
            closeModalPlayers={setOpenModalPlayers}
            matchId={matchId}
            team={Team}
            playerPosition={PlayerPosition}
          />
        )}
      </div>
      <div className="view-teams">
        <div
          className="close"
          onClick={onClose}
          onKeyDown={onClose}
          role="link"
          tabIndex={0}
        >
          X
        </div>
        <div className="team1">
          {MatchCardsInfos.filter((card) => card.id === matchId)
            .map((e) => e.team1)
            .flat()
            .map((player, index) => (
              <TeamPosition
                isOpen={player.isOpen}
                key={player.id}
                className={index === 2 ? "middle" : null}
                name={player.name}
                avatar={player.avatar}
                setOpenModalPlayers={() => {
                  handleClick(index, "team1");
                }}
              />
            ))}
        </div>
        <div className="terrain">
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
                key={player.id}
                className={index === 2 ? "middle" : null}
                name={player.name}
                avatar={player.avatar}
                setOpenModalPlayers={() => {
                  handleClick(index, "team2");
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
