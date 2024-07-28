import { useContext } from "react";

import { AppContext } from "../App";
import CustomWebcam from "./custom-webcam";
import WebcamCapture from "./webcam-capture";
import { tops } from "./constants.js";

const CenterContentContainer = () => {
  const { currentTopIndex } = useContext(AppContext);

  if (!tops) return;

  return (
    <div className="center-content-container">
      <div className="video-background">
        {/* <CustomWebcam/> */}
        <WebcamCapture />
      </div>

      <img
        src={tops[currentTopIndex]}
        className="current-clothing-top"
        alt={tops[currentTopIndex]}
      />
    </div>
  );
};

export default CenterContentContainer;
