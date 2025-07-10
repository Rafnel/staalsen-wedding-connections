import React from "react";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal({ onViewLeaderboard }) {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      trigger={
        <Button variant="submit" className="w-full" children={"View Results"} />
      }
      initiallyOpen={false}
      showActionButton={false}
    >
      <div className="flex flex-col place-content-center">
        <p className="text-center font-[600]">
          Your Guesses Are Represented Below
        </p>
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onViewLeaderboard}
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;
