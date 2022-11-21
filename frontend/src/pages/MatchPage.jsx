import "./MatchPage.css";
import React, { useState, useMemo, useEffect } from "react";
import SearchButtons from "@components/Search/SearchButtons";
import MatchCards from "@components/MatchCards/MatchCards";
import ViewMatchPage from "@pages/ViewMatch/ViewMatchPages";
import AddMatchPage from "@pages/AddMatchPage";
import axios from "axios";
import { MatchListContext, MatchViewContext } from "../data/MatchListContext";
import InsideCard from "../img/mobile/inside-card.png";
import OutsideCard from "../img/mobile/outside-card.png";
import PlayersInfos from "../data/PlayersInfos";

export default function MainPage() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=30").then((response) => {
      setUser(response.data.results);
      setIsLoading(false);
    });
    user.map((a) =>
      PlayersInfos.push({
        id: a.cell,
        name: a.name.first,
        age: a.dob.age,
        from: a.city,
        avatar: a.picture.medium,
        isOpen: false,
      })
    );
  }, [isLoading]);

  const [matchCardsList, setMatchCardsList] = useState([]);
  const [viewCalendar, setViewCalendar] = useState(false);
  const [viewMatch, setViewMatch] = useState(false);
  const [viewAddMatch, setViewAddMatch] = useState(false);
  const [matchId, setMatchId] = useState("");
  const [refresh, setRefresh] = useState(false);

  const MatchListProviderValue = useMemo(
    () => ({ refresh, setRefresh }),
    [refresh, setRefresh]
  );

  const MatchViewProviderValue = useMemo(
    () => ({ viewMatch, setViewMatch }),
    [viewMatch, setViewMatch]
  );

  return (
    <MatchListContext.Provider value={MatchListProviderValue}>
      <MatchViewContext.Provider value={MatchViewProviderValue}>
        <section className="match-page">
          <div className="logo-container">
            <img
              className="logo"
              src="src/img/mobile/logoGetMatch.png"
              alt="logo"
            />
          </div>
          <SearchButtons
            viewCalendar={viewCalendar}
            setViewCalendar={setViewCalendar}
            setMatchCardsList={setMatchCardsList}
          />
          <div className="cards-container">
            {matchCardsList.map((card) => (
              <MatchCards
                toViewMatch={() => {
                  setViewMatch(true);
                  setMatchId(card.id);
                }}
                img={card.groundType === "Inside" ? InsideCard : OutsideCard}
                key={card.id}
                city={card.city}
                date={card.date}
                time={card.time}
                versus={card.versus}
                playersLeft={card.playersLeft}
                groundType={card.groundType}
              />
            ))}
          </div>
          <div
            className="add-match-button background-container"
            type="button"
            onClick={() => {
              setViewAddMatch(true);
            }}
            onKeyDown={() => {
              setViewAddMatch(true);
            }}
            role="button"
            tabIndex={0}
          >
            <p>ADD MATCH</p>
          </div>
          <ViewMatchPage
            matchId={matchId}
            viewMatch={viewMatch}
            onClose={() => setViewMatch(false)}
          />
          <AddMatchPage
            viewAddMatch={viewAddMatch}
            setViewAddMatch={() => setViewAddMatch(false)}
            onClose={() => setViewAddMatch(false)}
            viewMatch={(id) => {
              setViewMatch(true);
              setMatchId(id);
            }}
          />
        </section>
      </MatchViewContext.Provider>
    </MatchListContext.Provider>
  );
}
