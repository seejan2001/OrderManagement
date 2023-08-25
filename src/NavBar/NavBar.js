import "./NavBar.css";

const NavBar = ({ icon, setIcon }) => {
  return (
    <div className="res-navbar">
      <h1 style={{ display: "inline" }}>NavBar</h1>
      {/* checks if icon==1 then it change to 0;
          checks if icon==0 then it change to 1;
      */}
      <button
        style={{ height: "20px", zIndex: "-999" }}
        onClick={() => {
          icon === 1 ? setIcon(0) : setIcon(1);
        }}
      >
        Icon
      </button>
    </div>
  );
};

export default NavBar;
