
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="placeholder logo"className="logo"></img>
      </div>
      <div className="tagline">
        <h1>THE GIVE BACK APP</h1>
      </div>
    </header>
  );
};

export default Header;
