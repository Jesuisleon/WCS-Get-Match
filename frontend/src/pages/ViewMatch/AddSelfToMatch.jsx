import { AdminInfos } from "../../data/PlayersInfos";
import MatchCardsInfos from "../../data/MatchCardsInfos";

function AddSelfToMatch({ close, matchId, team, playerPosition }) {
  const handleClick = () => {
    const match = MatchCardsInfos.find((e) => e.id === matchId);
    match[team][playerPosition] = AdminInfos;
    match.playersLeft -= 1;
    close();
  };

  return (
    <div className="modal-background">
      <div
        className="modal-container background-container"
        style={{ padding: "1.5rem" }}
      >
        <p>Do you want to join the match</p>
        <div className="inline">
          <button
            style={{ margin: "0" }}
            type="button"
            className="button next"
            variant="contained"
            onClick={handleClick}
          >
            YES
          </button>
          <button
            style={{ margin: "0" }}
            type="button"
            className="button back"
            onClick={close}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSelfToMatch;
