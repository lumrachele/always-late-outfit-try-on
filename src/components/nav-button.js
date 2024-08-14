const NavButton = ({ handleClick, buttonClassName }) => {
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <div className="triangle" />
    </button>
  );
};

export default NavButton;
