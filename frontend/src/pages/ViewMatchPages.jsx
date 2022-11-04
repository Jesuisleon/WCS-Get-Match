// import MatchCards from "@components/MatchCards";
import "./ViewMatchPages.css";
import { useState } from "react";
import ModalPlayers from "@components/ModalPlayers";
import MatchCards from "@components/MatchCards";
import MatchCardsInfos from "../data/MatchCardsInfos";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";

export default function ViewMatchPages({ openViewMatch, onClose }) {
  if (!openViewMatch) return null;
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
          <div className="players-container">
            <div className="avatar-container"> </div>
            <p className="players-name"> Kobe</p>
          </div>

          <div
            role="button"
            tabIndex={0}
            className="players-container middle"
            onClick={() => {
              setOpenModalPlayers(true);
            }}
            onKeyDown={() => {
              setOpenModalPlayers(true);
            }}
          >
            <div className="avatar-container" />
            <p className="players-name">Lucas</p>
          </div>

          <div className="players-container">
            <div className="avatar-container"> </div>
            <p className="players-name">Tony P</p>
          </div>
        </div>

        <div className="terrain">
          {MatchCardsInfos.filter((card) => card.id === "1").map(
            (element, index) => (
              <MatchCards
                keys={index}
                img={element.groundType === "Inside" ? InsideCard : OutsideCard}
                time={element.time}
                versus={element.versus}
                date={element.date}
                city={element.city}
                playersLeft={element.playersLeft}
                groundType={element.groundType}
              />
            )
          )}
        </div>

        <div className="team2">
          <div className="players-container">
            <div className="avatar-container"> </div>
            <p className="players-name">Jordan</p>
          </div>

          <div className="players-container middle">
            <div className="avatar-container"> </div>
            <p className="players-name">Steph</p>
          </div>

          <div className="players-container">
            <div className="avatar-container"> </div>
            <p className="players-name">Magik</p>
          </div>
        </div>
      </div>
    </div>
  );
}
