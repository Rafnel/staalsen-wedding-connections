import React from "react";
import { CONNECTION_GAMES } from "../../lib/data";

export const PuzzleDataContext = React.createContext();

function PuzzleDataProvider({ children }) {
  game = CONNECTION_GAMES[0];
  const [gameData, setGameData] = React.useState(game);
  const categorySize = gameData[0].words.length;
  const numCategories = gameData.length;
  return (
    <PuzzleDataContext.Provider
      value={{ gameData, numCategories, categorySize }}
    >
      {children}
    </PuzzleDataContext.Provider>
  );
}

export default PuzzleDataProvider;
