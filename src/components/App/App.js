import React from "react";
import Header from "../Header";
import Game from "../Game";
import Leaderboard from "../Leaderboard";
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setShowLeaderboard(true);
    window.addEventListener('show-leaderboard', handler);
    return () => window.removeEventListener('show-leaderboard', handler);
  }, []);

  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header />
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50"
            onClick={() => setShowLeaderboard((v) => !v)}
          >
            {showLeaderboard ? "Back to Game" : "View Leaderboard"}
          </button>
          {showLeaderboard ? <Leaderboard onBack={() => setShowLeaderboard(false)} /> : <Game />}
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;
