import buttonArrow from "../img/button-arrow.png";

const NavButton = ({ handleClick, buttonClassName }) => {
  return (
    <button className={buttonClassName} onClick={handleClick}>
      {/* <div className="triangle" /> */}
      <img src={buttonArrow} className="button-image" />
    </button>
  );
};

export default NavButton;
