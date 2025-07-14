import React from "react";
import Header from "../Header";
import Game from "../Game";
import Leaderboard from "../Leaderboard";
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import Onboarding from "../Onboarding/Onboarding";

function checkTableNumberUnique(tableNumber) {
  // Fetch all leaderboard entries (including reserved)
  return fetch("/.netlify/functions/leaderboard?all=1")
    .then(r => r.json())
    .then(entries => {
      if (!Array.isArray(entries)) return "Could not check table number.";
      // Table number is not available if any entry (reserved or not) matches
      const taken = entries.some(e => String(e.tableNumber) === String(tableNumber));
      if (taken) {
        // Show a specific error if reserved
        const reserved = entries.find(e => String(e.tableNumber) === String(tableNumber) && e.reserved);
        if (reserved) {
          return "That table number is already reserved by another device, work to solve the puzzle with your table.";
        }
        return false;
      }
      return true;
    })
    .catch(() => "Could not check table number.");
}

async function reserveTableAndTeam(tableNumber, teamName) {
  try {
    const res = await fetch(
      '/.netlify/functions/leaderboard?reserve=1',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: teamName, tableNumber })
      }
    );
    console.log("Reserve response:", res);
    if (res.status === 200) return true;
    if (res.status === 409) {
      const data = await res.json();
      return data.error || false;
    }
    return false;
  } catch {
    return false;
  }
}

function App() {
  const [showLeaderboard, setShowLeaderboard] = React.useState(false);
  const [onboardingStep, setOnboardingStep] = React.useState(() => {
    // Only show onboarding if not completed
    return !window.localStorage.getItem("onboardingComplete");
  });
  const [error, setError] = React.useState("");

  const handleTableNumber = async (tableNumber) => {
    const unique = await checkTableNumberUnique(tableNumber);
    if (unique === true) {
      window.localStorage.setItem("tableNumber", tableNumber);
      return true;
    }
    return false;
  };

  const handleTeamName = async (teamName, tableNumber) => {
    // Reserve table/team before starting game
    const reserved = await reserveTableAndTeam(tableNumber, teamName);
    if (reserved === true) {
      window.localStorage.setItem("teamName", teamName);
      window.localStorage.setItem("tableNumber", tableNumber);
      return true;
    }
    return reserved || false;
  };

  React.useEffect(() => {
    const handler = () => setShowLeaderboard(true);
    window.addEventListener('show-leaderboard', handler);
    return () => window.removeEventListener('show-leaderboard', handler);
  }, []);

  if (onboardingStep) {
    return (
      <Onboarding
        onComplete={() => {
          window.localStorage.setItem("onboardingComplete", "1");
          setOnboardingStep(false);
        }}
        onTableNumber={handleTableNumber}
        onTeamName={handleTeamName}
        error={error}
      />
    );
  }

  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header />
          <div className="w-full flex justify-center mb-2 mt-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50"
              onClick={() => setShowLeaderboard((v) => !v)}
            >
              {showLeaderboard ? "Back to Game" : "View Leaderboard"}
            </button>
          </div>
          {showLeaderboard ? <Leaderboard onBack={() => setShowLeaderboard(false)} /> : <Game />}
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;
