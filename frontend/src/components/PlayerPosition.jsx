import "../pages/ViewMatchPages.css";
import addPlayer from "../img/icons/add-player-white.png";

function PlayerPosition({
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
        <img className="add-player" src={addPlayer} alt="players" />
      </div>
    </div>
  );
}

export default PlayerPosition;
