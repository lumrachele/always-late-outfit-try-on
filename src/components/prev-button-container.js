import PrevButton from "./prev-button.js";
import { useCallback, useContext } from "react";
import { AppContext } from "../App";
import { tops } from "./constants.js";

const PrevButtonContainer = () => {
  const { currentTopIndex, setCurrentTopIndex } = useContext(AppContext);

  const handleClick = useCallback(() => {
    const futureIndex =
      currentTopIndex === 0 ? tops.length - 1 : currentTopIndex - 1;

    return setCurrentTopIndex(futureIndex);
  }, [currentTopIndex]);

  return (
    <div className="prev-button-container">
      <PrevButton handleClick={handleClick} />
    </div>
  );
};

export default PrevButtonContainer;
