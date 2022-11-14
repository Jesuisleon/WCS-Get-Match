import "./ViewMatch.css";
import { useState } from "react";
import ModalPlayers from "@components/ModalPlayers";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function ViewMatchPages({ openViewMatch, onClose }) {
  const [openModalPlayers, setOpenModalPlayers] = useState(false);

  if (!openViewMatch) return null;

  return (
    <div className="viewback">
      <div className="modal-viewMatch">
        {openModalPlayers && (
          <ModalPlayers closeModalPlayers={setOpenModalPlayers} />
        )}
      </div>
      <div className="logoviewback">
        <div
          role="button"
          tabIndex={0}
          className="closeButton"
          onClick={() => onClose(false)}
          onKeyDown={() => {
            onClose(false);
          }}
        >
          <p>X</p>
        </div>

        <div className="team1">
          <div className="players-container">
            <div className="avatar-container"> </div>
            <p className="players-name">
              <PlayerCard name="Lamelo Ball" />
            </p>
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
          <img
            className="terrain-logo"
            src="src/img/mobile/outside-card.png"
            alt="logo"
          />
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
