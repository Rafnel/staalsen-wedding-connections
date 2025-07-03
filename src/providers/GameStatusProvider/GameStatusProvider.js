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
  const [solvedGameData, setSolvedGameData] = React.useState(() => {
    const loadedState = loadGameStateFromLocalStorage();
    console.log("checking game state!", {
      loadedState: loadedState,
      gd1: gameData,
      gd2: loadedState?.gameData,
    });
    if (!isGameDataEquivalent({ gd1: gameData, gd2: loadedState?.gameData })) {
      return [];
    }
    if (
      !isGuessesFromGame({
        gameData,
        submittedGuesses: loadedState?.submittedGuesses,
      })
    ) {
      return [];
    }
    if (Array.isArray(loadedState?.submittedGuesses)) {
      setSubmittedGuesses(loadedState.submittedGuesses);
    }

    if (Array.isArray(loadedState?.solvedGameData)) {
      return loadedState.solvedGameData;
    }
    return [];
  });

  const [isGameWon, setIsGameWon] = React.useState(false);
  const [guessCandidate, setGuessCandidate] = React.useState([]);

  const numMistakesUsed = submittedGuesses.length - solvedGameData.length;

  // use effect to check if game is won
  React.useEffect(() => {
    if (solvedGameData.length === gameData.length) {
      setIsGameWon(true);
    }
    const gameState = { submittedGuesses, solvedGameData, gameData };
    saveGameStateToLocalStorage(gameState);
  }, [solvedGameData]);

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
      }}
    >
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
