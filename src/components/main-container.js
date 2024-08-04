import PrevButtonContainer from "./prev-button-container.js";
import NextButtonContainer from "./next-button-container.js";
import CenterContentContainer from "./center-content-container.js";

const MainContainer = () => {
  return (
    <div className="main-container">
      {/* <PrevButtonContainer/> */}
      <CenterContentContainer />
      {/* <NextButtonContainer/> */}
    </div>
  );
};

export default MainContainer;
