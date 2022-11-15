import React from "react";
import "./ModalPlayers.css";
import ViewPlayers from "./PlayerCard/ViewPlayers";

function ModalPlayers({ closeModalPlayers, playersPic, setPlayersPic }) {
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
          <ViewPlayers playersPic={playersPic} setPlayersPic={setPlayersPic} />
        </div>
        <div className="modalPlayersBody" />
      </div>
    </div>
  );
}

export default ModalPlayers;
