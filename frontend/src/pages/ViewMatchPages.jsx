// import MatchCards from "@components/MatchCards";
import "./ViewMatchPages.css";
import { useState } from "react";
import PlayerPosition from "@components/PlayerPosition";
import ModalPlayers from "../components/ModalPlayers";
import MatchCards from "../components/MatchCards/MatchCards";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function ViewMatchPages({ viewMatch, onClose, matchId }) {
  if (!viewMatch) return null;

  const [openModalPlayers, setOpenModalPlayers] = useState(false);

  return (
    <div className="viewback">
      <div className="modal-viewMatch">
        {openModalPlayers && (
          <ModalPlayers closeModalPlayers={setOpenModalPlayers} />
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
          {MatchCardsInfos[0].team1.map((card, index) => (
            <PlayerPosition
              className={index === 2 ? "middle" : null}
              name={card.name}
              avatar={card.avatar}
              setOpenModalPlayers={() => {
                setOpenModalPlayers(true);
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
          {MatchCardsInfos[0].team2.map((card, index) => (
            <PlayerPosition
              className={index === 2 ? "middle" : null}
              name={card.name}
              avatar={card.avatar}
              setOpenModalPlayers={() => {
                setOpenModalPlayers(true);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
