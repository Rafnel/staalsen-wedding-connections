import React from "react";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);
  return showLeaderboard ? (
    <Leaderboard onBack={() => setShowLeaderboard(false)} />
  ) : (
    <>
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50"
        onClick={() => setShowLeaderboard(true)}
      >
        View Leaderboard
      </button>
      <Game />
    </>
  );
}

export default App;
