import "./ViewMatchPages.css";
import { useState } from "react";
import CloseButton from "@assets/CloseButton";
import AddPlayersPage from "./AddPlayersPage";
import { AddSelf } from "./SelfToMatch";
import MatchCards from "../../components/MatchCards/MatchCards";
import MatchCardsInfos from "../../data/MatchCardsInfos";
import InsideCard from "../../img/mobile/inside-card.png";
import OutsideCard from "../../img/mobile/outside-card.png";

export function TeamPosition({
  openModal,
  deleteSelf,
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
        onClick={openModal}
        onKeyDown={openModal}
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
      <div
        role="button"
        tabIndex={0}
        className={className}
        onClick={deleteSelf}
        onKeyDown={deleteSelf}
      >
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
  const [addToMatch, setAddToMatch] = useState({
    open: false,
    onMatch: false,
  });

  const [PlayerPosition, setPlayerPosition] = useState();
  const [Team, setTeam] = useState();

  let PlayersKeys = 0;
  function IncrementPlayersKeys() {
    PlayersKeys += 1;
    return PlayersKeys;
  }

  const match = MatchCardsInfos.filter((card) => card.id === matchId);

  const handleClick = (index, team) => {
    setTeam(team);
    setPlayerPosition(index);

    if (match[0].admin !== "Jordan") {
      if (addToMatch.onMatch) return null;
      setAddToMatch({ ...addToMatch, open: true });
    }

    if (match[0].admin === "Jordan") {
      setOpenModalPlayers(true);
    }
    return null;
  };

  const handleClickToDelete = (index, team) => {
    setTeam(team);
    setPlayerPosition(index);
    if (match[0].admin !== "Jordan") {
      if (addToMatch.onMatch) setAddToMatch({ ...addToMatch, open: true });
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container background-container view-teams">
        <CloseButton onClick={onClose} />
        <div className="team1">
          {match
            .map((e) => e.team1)
            .flat()
            .map((player, index) => (
              <TeamPosition
                isOpen={player.isOpen}
                key={IncrementPlayersKeys()}
                className={`position${index} centered`}
                name={player.name}
                avatar={player.avatar}
                openModal={() => {
                  handleClick(index, "team1");
                }}
                deleteSelf={() => handleClickToDelete(index, "team1")}
              />
            ))}
        </div>
        <div className="field">
          {match.map((card) => (
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
          {match
            .map((e) => e.team2)
            .flat()
            .map((player, index) => (
              <TeamPosition
                isOpen={player.isOpen}
                key={IncrementPlayersKeys()}
                className={`position${index} centered`}
                name={player.name}
                avatar={player.avatar}
                openModal={() => {
                  handleClick(index, "team2");
                }}
                deleteSelf={() => handleClickToDelete(index, "team1")}
              />
            ))}
        </div>
      </div>
      {openModalPlayers && (
        <AddPlayersPage
          closeModalPlayers={() => setOpenModalPlayers(!openModalPlayers)}
          matchId={matchId}
          team={Team}
          playerPosition={PlayerPosition}
        />
      )}
      {addToMatch.open && (
        <AddSelf
          close={() => setAddToMatch({ open: false })}
          addToMatch={setAddToMatch}
          onMatch={addToMatch.onMatch}
          matchId={matchId}
          team={Team}
          playerPosition={PlayerPosition}
        />
      )}
    </div>
  );
}
