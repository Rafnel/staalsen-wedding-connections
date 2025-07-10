import React from "react";
import { PuzzleDataContext } from "../PuzzleDataProvider";
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from "../../lib/local-storage";
import {
  isGameDataEquivalent,
  isGuessesFromGame,
} from "../../lib/game-helpers";
export const GameStatusContext = React.createContext();


function GameStatusProvider({ children }) {
  const { gameData } = React.useContext(PuzzleDataContext);
  const [submittedGuesses, setSubmittedGuesses] = React.useState([]);
  const [playerName, setPlayerName] = React.useState("");
  const [solvedGameData, setSolvedGameData] = React.useState(() => {
    let loadedState = loadGameStateFromLocalStorage() || {};
    // Prompt for name if not present in local storage
    let name = loadedState.playerName;
    if (!name) {
      name = window.prompt("Welcome! Please enter your table's name for the leaderboard:", "");
      if (name && name.trim()) {
        name = name.trim();
        setPlayerName(name);
        // Record start timestamp if not present
        const now = Date.now();
        loadedState = { ...loadedState, playerName: name, startTimestamp: now };
        saveGameStateToLocalStorage(loadedState);
      }
    } else {
      setPlayerName(name);
      // If name exists but no startTimestamp, set it (for backward compatibility)
      if (!loadedState.startTimestamp) {
        loadedState.startTimestamp = Date.now();
        saveGameStateToLocalStorage(loadedState);
      }
    }
    if (!isGameDataEquivalent({ gd1: gameData, gd2: loadedState.gameData })) {
      return [];
    }
    if (
      !isGuessesFromGame({
        gameData,
        submittedGuesses: loadedState.submittedGuesses,
      })
    ) {
      return [];
    }
    if (Array.isArray(loadedState.submittedGuesses)) {
      setSubmittedGuesses(loadedState.submittedGuesses);
    }
    if (Array.isArray(loadedState.solvedGameData)) {
      return loadedState.solvedGameData;
    }
    return [];
  });

  const [isGameWon, setIsGameWon] = React.useState(false);
  const [guessCandidate, setGuessCandidate] = React.useState([]);

  const numMistakesUsed = submittedGuesses.length - solvedGameData.length;


  // Maintain scoreSubmitted in state and localStorage
  const [scoreSubmitted, setScoreSubmitted] = React.useState(() => {
    try {
      const gameState = loadGameStateFromLocalStorage();
      return !!gameState?.scoreSubmitted;
    } catch {
      return false;
    }
  });

  // use effect to check if game is won
  React.useEffect(() => {
    let loadedState = loadGameStateFromLocalStorage() || {};
    if (solvedGameData.length === gameData.length) {
      setIsGameWon(true);
      // Record completion timestamp if not already set
      if (!loadedState.completionTimestamp) {
        loadedState.completionTimestamp = Date.now();
      }
    }
    // Always include playerName and scoreSubmitted in saved state
    const gameState = {
      submittedGuesses,
      solvedGameData,
      gameData,
      playerName,
      scoreSubmitted,
      startTimestamp: loadedState.startTimestamp,
      completionTimestamp: loadedState.completionTimestamp,
    };
    saveGameStateToLocalStorage(gameState);
  }, [solvedGameData, playerName, scoreSubmitted]);

  // Persist submittedGuesses to localStorage whenever it changes
  React.useEffect(() => {
    let loadedState = loadGameStateFromLocalStorage() || {};
    const gameState = {
      submittedGuesses,
      solvedGameData,
      gameData,
      playerName,
      scoreSubmitted,
      startTimestamp: loadedState.startTimestamp,
      completionTimestamp: loadedState.completionTimestamp,
    };
    saveGameStateToLocalStorage(gameState);
  }, [submittedGuesses, scoreSubmitted]);

  return (
    <GameStatusContext.Provider
      value={{
        isGameWon,
        numMistakesUsed,
        solvedGameData,
        setSolvedGameData,
        submittedGuesses,
        setSubmittedGuesses,
        guessCandidate,
        setGuessCandidate,
        playerName,
        setPlayerName,
        scoreSubmitted,
        setScoreSubmitted,
      }}
    >
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
