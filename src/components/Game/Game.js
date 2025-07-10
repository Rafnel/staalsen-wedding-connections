import React from "react";
import { shuffleGameData } from "../../lib/game-helpers";
import GameGrid from "../GameGrid";
import NumberOfMistakesDisplay from "../NumberOfMistakesDisplay";
import GameWonModal from "../modals/GameWonModal";

import { Separator } from "../ui/separator";
import ConfettiExplosion from "react-confetti-explosion";

import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";
import { GameStatusContext } from "../../providers/GameStatusProvider";
import GameControlButtonsPanel from "../GameControlButtonsPanel";

import ViewResultsModal from "../modals/ViewResultsModal";

function Game() {
  const { gameData, categorySize, numCategories } =
    React.useContext(PuzzleDataContext);
  const { submittedGuesses, solvedGameData, isGameWon, playerName } =
    React.useContext(GameStatusContext);

  const [shuffledRows, setShuffledRows] = React.useState(
    shuffleGameData({ gameData })
  );
  const [isEndGameModalOpen, setisEndGameModalOpen] = React.useState(false);
  const [gridShake, setGridShake] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [scoreSubmitted, setScoreSubmitted] = React.useState(() => {
    // Check localStorage for scoreSubmitted flag
    try {
      const gameState = JSON.parse(window.localStorage.getItem('gameState'));
      return !!gameState?.scoreSubmitted;
    } catch {
      return false;
    }
  });

  // use effect to update Game Grid after a row has been correctly solved
  React.useEffect(() => {
    const categoriesToRemoveFromRows = solvedGameData.map(
      (data) => data.category
    );
    const dataLeftForRows = gameData.filter((data) => {
      return !categoriesToRemoveFromRows.includes(data.category);
    });
    if (dataLeftForRows.length > 0) {
      setShuffledRows(shuffleGameData({ gameData: dataLeftForRows }));
    }
  }, [solvedGameData]);

  // Handle End Game!
  React.useEffect(() => {
    if (!isGameWon) {
      return;
    }
    // extra delay for game won to allow confetti to show
    const modalDelay = isGameWon ? 2000 : 250;
    const delayModalOpen = window.setTimeout(() => {
      setisEndGameModalOpen(true);
      //unmount confetti after modal opens
      setShowConfetti(false);
    }, modalDelay);

    if (isGameWon) {
      setShowConfetti(true);
      // Submit to leaderboard only if not already submitted
      if (!scoreSubmitted) {
        const mistakes = submittedGuesses.length - solvedGameData.length;
        if (playerName && typeof mistakes === 'number' && mistakes >= 0) {
          fetch('/.netlify/functions/leaderboard', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: playerName, mistakes })
          })
            .then(() => {
              setScoreSubmitted(true);
              // Save flag in localStorage
              try {
                const gameState = JSON.parse(window.localStorage.getItem('gameState')) || {};
                gameState.scoreSubmitted = true;
                window.localStorage.setItem('gameState', JSON.stringify(gameState));
              } catch {}
            })
            .catch((err) => {
              // Optionally handle error (e.g., show a message)
              console.error('Failed to submit to leaderboard:', err);
            });
        }
      }
    }

    return () => window.clearTimeout(delayModalOpen);
  }, [isGameWon, scoreSubmitted, playerName, submittedGuesses, solvedGameData]);

  return (
    <>
      {playerName && (
        <h2 className="text-lg text-center mt-4 mb-1 font-semibold">
          Team {playerName}
        </h2>
      )}
      <h3 className="text-xl text-center mt-1">
        Create {numCategories} groups of {categorySize}
      </h3>

      <div className={`game-wrapper`}>
        {isGameWon && (
          <GameWonModal
            open={isEndGameModalOpen}
            submittedGuesses={submittedGuesses}
          />
        )}
        <GameGrid
          gameRows={shuffledRows}
          shouldGridShake={gridShake}
          setShouldGridShake={setGridShake}
        />
        {showConfetti && isGameWon && (
          <div className="grid place-content-center">
            <ConfettiExplosion
              particleCount={100}
              force={0.8}
              duration={2500}
            />
          </div>
        )}
        <Separator />

        {!isGameWon ? (
          <>
            <NumberOfMistakesDisplay />
            <GameControlButtonsPanel
              shuffledRows={shuffledRows}
              setShuffledRows={setShuffledRows}
              setGridShake={setGridShake}
            />
          </>
        ) : (
          <ViewResultsModal />
        )}
      </div>
    </>
  );
}

export default Game;
