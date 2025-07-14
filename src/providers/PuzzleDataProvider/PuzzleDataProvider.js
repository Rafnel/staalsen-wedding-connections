import React from "react";

export const CONNECTION_GAMES = [
  [
    {
      category: "Shared Hobbies",
      words: ["Board", "Disc", "Pickle", "Ultimate"],
      difficulty: 1,
    },
    {
      category: "Places to Visit in Costa Rica (Our Honeymoon!)",
      words: ["Ocean", "Rainforest", "Springs", "Volcano"],
      difficulty: 2,
    },
    {
      category: "Unity Symbolism During Wedding Ceremony",
      words: ["Candle", "Knot", "Rings", "Sand"],
      difficulty: 3,
    },
    {
      category: "Parts of Titles to Our Favorite Movies",
      words: ["Monty", "Pirates", "Pride", "Princess"],
      difficulty: 4,
    },
  ],
];


export const PuzzleDataContext = React.createContext();

function PuzzleDataProvider({ children }) {
  let game = CONNECTION_GAMES[0];
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
