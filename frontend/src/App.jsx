import IndexPage from "@pages/IndexPage";
import MatchPage from "@pages/MatchPage";
import { useState } from "react";

function App() {
  const [playersPic, setPlayersPic] = useState();
  return (
    <div className="app">
      <IndexPage />
      <MatchPage playersPic={playersPic} setPlayersPic={setPlayersPic} />
    </div>
  );
}

export default App;
