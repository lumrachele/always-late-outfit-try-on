import { useContext, useCallback } from "react";

import { AppContext } from "../App";
import CustomWebcam from "./custom-webcam";
import WebcamCapture from "./webcam-capture";
import { tops } from "./constants.js";
import player from "../img/player.png";
import NavButton from "./nav-button";

const CenterContentContainer = () => {
  const { currentTopIndex, setCurrentTopIndex } = useContext(AppContext);

  const handleClickPrev = useCallback(() => {
    const futureIndex =
      currentTopIndex === 0 ? tops.length - 1 : currentTopIndex - 1;

    return setCurrentTopIndex(futureIndex);
  }, [currentTopIndex]);

  const handleClickNext = useCallback(() => {
    const futureIndex =
      currentTopIndex === tops.length - 1 ? 0 : currentTopIndex + 1;

    return setCurrentTopIndex(futureIndex);
  }, [currentTopIndex]);

  if (!tops) return;

  return (
    <div className="center-content-container">
      <div className="video-background">
        {/* <CustomWebcam/> */}

        <WebcamCapture />
        <div>
          <NavButton
            buttonClassName="prev-button"
            handleClick={handleClickPrev}
          />
          <NavButton
            buttonClassName="next-button"
            handleClick={handleClickNext}
          />
        </div>
      </div>

      {/* <div className=""> */}
      <img
        src={tops[currentTopIndex]}
        className="current-clothing-top"
        alt={tops[currentTopIndex]}
      />
      {/* </div> */}
    </div>
  );
};

export default CenterContentContainer;
