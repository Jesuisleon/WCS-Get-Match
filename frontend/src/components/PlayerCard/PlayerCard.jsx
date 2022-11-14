function PlayerCard({ name, age, city }) {
    return (
      <div className="Background-Player1">
        <div className="Player1-image">
          <img
            className="player1-img"
            src="src/img/mobile/Avatar-player.png"
            alt="Player1Img"
          />
        </div>
        <div className="player1-CardText">
          <div className="player1-All-Text-Name">
            <h2 className="player1-TitleName">Name :</h2>
            <p className="player1-Name">{name}</p>
          </div>
          <div className="player1-All-Text-Age">
            <h2 className="player1-TitleAge">Age :</h2>
            <p className="player1-Age">{age}</p>
          </div>
  
          <div className="player1-All-Text-City">
            <h2 className="player1-TitleCity">City :</h2>
            <p className="player1-City">{city}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlayerCard;