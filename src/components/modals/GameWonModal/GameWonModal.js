import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameWonModal({ open, submittedGuesses, onViewLeaderboard }) {
  const { gameData } = React.useContext(PuzzleDataContext);
  const [show, setShow] = React.useState(open);

  React.useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <BaseModal
      title="You solved the puzzle!"
      initiallyOpen={show}
      showActionButton={false}
      onClose={() => setShow(false)}
    >
      <div>
        <span>{"Great job! You can admire the puzzle or view the leaderboard with the buttons."}</span>
      </div>
      <div className="justify-center">
        {/* the whitespace: pre style makes the emoji grid appear with new lines character */}
        <span className="text-center whitespace-pre">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={() => setShow(false)}
        >
          Admire Puzzle
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onViewLeaderboard}
        >
          View Leaderboard
        </button>
      </div>
    </BaseModal>
  );
}

export default GameWonModal;
