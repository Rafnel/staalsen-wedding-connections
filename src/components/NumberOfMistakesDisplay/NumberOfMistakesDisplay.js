import React from "react";
import { GameStatusContext } from "../../providers/GameStatusProvider";

function NumberOfMistakesDisplay() {
  const { numMistakesUsed } = React.useContext(GameStatusContext);
  return (
    <div className="flex flex-row gap-x-4 justify-center">
      <p className="text-base">Mistakes Made: <span className="font-bold">{numMistakesUsed}</span></p>
    </div>
  );
}

export default NumberOfMistakesDisplay;
