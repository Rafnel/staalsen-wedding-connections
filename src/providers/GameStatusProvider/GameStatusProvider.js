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
  // Get playerName from localStorage (set by onboarding)
  React.useEffect(() => {
    let loadedState = loadGameStateFromLocalStorage() || {};
    let name = window.localStorage.getItem('teamName');
    if (name && name.trim()) {
      setPlayerName(name.trim());
      // Record start timestamp if not present
      if (!loadedState.startTimestamp) {
        loadedState = { ...loadedState, playerName: name.trim(), startTimestamp: Date.now() };
        saveGameStateToLocalStorage(loadedState);
      }
    } else if (loadedState.playerName) {
      setPlayerName(loadedState.playerName);
      if (!loadedState.startTimestamp) {
        loadedState.startTimestamp = Date.now();
        saveGameStateToLocalStorage(loadedState);
      }
    }
  }, []);

  const [solvedGameData, setSolvedGameData] = React.useState(() => {
    let loadedState = loadGameStateFromLocalStorage() || {};
    // Use localStorage for playerName
    let name = window.localStorage.getItem('teamName') || loadedState.playerName;
    if (name && name.trim()) {
      loadedState.playerName = name.trim();
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
