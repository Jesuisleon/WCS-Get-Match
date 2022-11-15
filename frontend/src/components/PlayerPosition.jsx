import "../pages/ViewMatchPages.css";

function PlayerPosition({ setOpenModalPlayers, name, avatar, className }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`players-container  ${className}`}
      onClick={setOpenModalPlayers}
      onKeyDown={setOpenModalPlayers}
    >
      <div className="avatar-container">
        <img className="avatar-player" src={avatar} alt="players" />
      </div>
      <p className="players-name">{name}</p>
    </div>
  );
}

export default PlayerPosition;
