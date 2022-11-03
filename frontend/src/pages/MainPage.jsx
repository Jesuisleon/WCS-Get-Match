import "./MainPage.css";
import ViewMatchPages from "./ViewMatchPages";

export default function MainPage() {
  return (
    <div>
      <ViewMatchPages />
    </div>
    // <div className="main-page">
    //   <div className="logo-container">
    //     <img className="logo" src="src/img/mobile/logo.png" alt="logo" />
    //   </div>
    //   <div className="search-buttons">
    //     <div className="search-button">CITY</div>
    //     <div className="search-button">TODAY</div>
    //     <div className="search-button">MORNING</div>
    //     <div className="search-button red-text">3vs3</div>
    //   </div>
    //   <div className="cards-container">
    //     {MatchCardsInfos.map((element, index) => (
    //       <MatchCards
    //         keys={index}
    //         img={element.groundType === "INSIDE" ? InsideCard : OutsideCard}
    //         time={element.time}
    //         versus={element.versus}
    //         date={element.date}
    //         city={element.city}
    //         playersLeft={element.playersLeft}
    //         groundType={element.groundType}
    //       />
    //     ))}
    //   </div>
    //   <div className="buttons-container">
    //     <div className="left-button">
    //       <img
    //         src="src/img/mobile/polygon-button.png"
    //         alt="polygon-button"
    //         className="polygon-button"
    //       />
    //       <img
    //         src="src/img/mobile/arrow-logo.png"
    //         alt="arrow-logo"
    //         className="arrow-logo"
    //       />
    //     </div>
    //     <div className="right-button">
    //       <img
    //         src="src/img/mobile/polygon-button.png"
    //         alt="polygon-button"
    //         className="polygon-button"
    //       />
    //       <img
    //         src="src/img/mobile/arrow-logo.png"
    //         alt="arrow-logo"
    //         className="arrow-logo"
    //       />
    //     </div>
    //   </div>
    //   <div className="add-match-button">
    //     <p>ADD MATCH</p>
    //   </div>
    // </div>
  );
}
