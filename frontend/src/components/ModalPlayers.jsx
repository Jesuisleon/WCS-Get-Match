import React from "react";
import "./ModalPlayers.css";
import ViewPlayers from "./PlayerCard/ViewPlayers";

function ModalPlayers({ closeModalPlayers }) {
  return (
    <div className="modalPlayersBackground">
      <div className="modalPlayersContenair">
        <button
          type="button"
          tabIndex={0}
          className="modalPlayersBtn"
          onClick={() => closeModalPlayers(false)}
        >
          X
        </button>
        <ViewPlayers />
      </div>
    </div>
  );
}

export default ModalPlayers;
