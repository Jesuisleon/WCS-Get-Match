import "./MainPage.css";
import ArrowButton from "@components/ArrowButton"
import MatchCards from "@components/MatchCards";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";
import MatchCardsInfos from "../data/MatchCardsInfos";


export default function MainPage() {

  return (
    <section className="main-page" >
      <div className="logo-container">
        <img className="logo" src="src/img/mobile/logo.png" alt="logo" />
      </div>
      <div className="search-buttons">
        <div className="search-button">CITY</div>
        <div className="search-button">TODAY</div>
        <div className="search-button">MORNING</div>
        <div className="search-button red-text">3vs3</div>
      </div>
      <div className="cards-container">
        {MatchCardsInfos.map((element, index) => (
          <MatchCards
            keys={index}
            img={element.groundType === "INSIDE" ? InsideCard : OutsideCard}
            time={element.time}
            versus={element.versus}
            date={element.date}
            city={element.city}
            playersLeft={element.playersLeft}
            groundType={element.groundType}
          />
        ))}
      </div>
      <div className="buttons-container">
        <div className="left-button">
          <ArrowButton />
        </div>
        <div className="right-button">
        <ArrowButton />
        </div>
      </div>
      <div className="add-match-button">
        <p>ADD MATCH</p>
      </div>
    </section>
  );
}
