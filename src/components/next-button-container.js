import NextButton from "./next-button.js";
import { useCallback, useContext } from "react";
import { AppContext } from "../App";
import { tops } from "./constants.js";

const NextButtonContainer = () => {
  const { currentTopIndex, setCurrentTopIndex } = useContext(AppContext);

  const handleClick = useCallback(() => {
    const futureIndex =
      currentTopIndex === tops.length - 1 ? 0 : currentTopIndex + 1;

    return setCurrentTopIndex(futureIndex);
  }, [currentTopIndex]);

  return (
    <div className="next-button-container">
      <NextButton handleClick={handleClick} />
    </div>
  );
};

export default NextButtonContainer;
