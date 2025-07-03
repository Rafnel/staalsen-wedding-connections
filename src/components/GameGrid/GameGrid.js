import React from "react";

import WordButton from "../WordButton";

import * as styles from "./GameGrid.module.css";

import { useSpring, animated } from "react-spring";
import { GameStatusContext } from "../../providers/GameStatusProvider";

import { Popover, PopoverTrigger } from "../ui/popover";

function WordRow({ words }) {
  return (
    <div className={`grid grid-cols-4 gap-4`}>
      {words.map((word) => (
        <WordButton key={word} word={word} fullCandidateSize={words.length} />
      ))}
    </div>
  );
}

export function SolvedWordRow({ ...props }) {
  const DIFFICULTY_COLOR_MAP = {
    1: "rgb(74 222 128)", // green
    2: "rgb(251 191 36)", // amber
    3: "rgb(129 140 248)", //indigo
    4: "rgb(34 211 238)", //cyan
  };

  const color = `${DIFFICULTY_COLOR_MAP[props.difficulty]}`;

  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(100%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)",
    },
    delay: 250,
  });
  return (
    <animated.div style={springProps}>
      <Popover>
          <PopoverTrigger asChild>
            <div
              className="cursor-pointer hover:animate-pulse shadow-md"
              style={{ backgroundColor: color, borderRadius: 8 }}
            >
              <p className="font-bold pt-2 pl-4">{props.category}</p>
              <p className="font-thin pb-2 pl-4">{props.words.join(", ")}</p>
            </div>
          </PopoverTrigger>
      </Popover>
    </animated.div>
  );
}

function GameGrid({ gameRows, shouldGridShake, setShouldGridShake }) {
  const { submittedGuesses, isGameWon, solvedGameData } =
    React.useContext(GameStatusContext);

  React.useEffect(() => {
    const shakeEffect = window.setTimeout(() => {
      setShouldGridShake(false);
      // this timeout should probably be calculated since it depends on animation values for the grid shake
    }, 2000);

    // cleanup timeout
    return () => window.clearTimeout(shakeEffect);
  }, [submittedGuesses]);

  const isGameActive = !isGameWon;
  const isGameActiveWithAnySolvedRows = isGameActive && solvedGameData.length > 0;

  return (
    <div>
      {(isGameWon || isGameActiveWithAnySolvedRows) && (
        <div className="grid gap-y-2 pb-2">
          {solvedGameData.map((solvedRowObj) => (
            <SolvedWordRow key={solvedRowObj.category} {...solvedRowObj} />
          ))}
        </div>
      )}
      {isGameActive && (
        <div className={`grid gap-y-2 ${shouldGridShake ? styles.shake : ""}`}>
          {gameRows.map((row, idx) => (
            <WordRow key={idx} words={row} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GameGrid;
