import React from "react";
import "./ModalPlayers.css";

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
          {" "}
          X
        </button>
        <div className="modalPlayersTitle">
          <hi> Nom Du Joueur </hi>
        </div>
        <div className="modalPlayersBody">
          <p> stat du joueurs ou image du joueurs </p>
        </div>
      </div>
    </div>
  );
}

export default ModalPlayers;
