import { useContext, useCallback, useEffect } from "react";

import { AppContext } from "../App";
import CustomWebcam from "./custom-webcam";
import WebcamCapture from "./webcam-capture";
import { tops, topClassNames } from "./constants.js";
import player from "../img/player.png";
import NavButton from "./nav-button";
import Canvas from "./canvas";
import alwaysLateLogo from "../img/always-late-logo.gif";

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

  //   const draw = useCallback(
  //     (context) => {
  //       const playerImage = new Image();
  //       playerImage.src = player;

  //       const currentTopImage = new Image();
  //       currentTopImage.src = tops[currentTopIndex];

  //       // const currentTopImage = (
  //       //   <img
  //       //     src={tops[currentTopIndex]}
  //       //     className="current-clothing-top"
  //       //     alt={tops[currentTopIndex]}
  //       //   />
  //       // );

  //       playerImage.onload = () => {
  //         context.drawImage(playerImage, 0, 0, 500, 500);
  //       };

  //       currentTopImage.onload = () => {
  //         context.drawImage(currentTopImage, 0, 0, 100, 100);
  //       };
  //     },
  //     [tops, currentTopIndex]
  //   );

  if (!tops) return;

  return (
    <div className="center-content-container">
      {/* <Canvas draw={draw} /> */}
      {/* <CustomWebcam/> */}

      <div className="webcam-image-container">
        <WebcamCapture />
        <img className="player-image" src={player} />
        <img className="always-late-logo" src={alwaysLateLogo} />
        <img
          src={tops[currentTopIndex]}
          className={`current-clothing-top ${topClassNames[currentTopIndex]}`}
          alt={tops[currentTopIndex]}
        />
      </div>
      <div className="button-container">
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
  );
};

export default CenterContentContainer;
