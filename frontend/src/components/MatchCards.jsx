import "./MatchCards.css";

export default function MatchCards({
  time,
  versus,
  img,
  date,
  city,
  playersLeft,
  groundType,
}) {
  return (
    <div className="match-card">
      <div className="image">
        <img src={img} alt="card-background" className="card-background" />
        </div>
      <div className="text">
        <div className="city inline">
          <img className="icons" src="src/img/icons/localisation-white.png" alt="localisation-icons"/>
          <p className="city">{city}</p>
        </div>
        <div className="time inline">
          <img className="icons" src="src/img/icons/schedule-grey.png" alt="schedule-icons"/>
          <p className="time grey">{time}</p>
        </div>
        <div className="versus inline">
          <img className="icons" src="src/img/icons/versus-grey.png" alt="versus-icons"/>
          <p className="versus grey">{versus}</p>
        </div>
        <div className="player-left inline">
          <img className="icons" src="src/img/icons/players-left-grey.png" alt="playersleft-icons"/>
          <p className="player-left-text grey">{playersLeft}</p>
        </div>
      </div>
    </div>
  );
}
