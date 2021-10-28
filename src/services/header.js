
const Header = ( {image} ) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={image} alt="placeholder logo"></img>
      </div>
      <div className="tagline">
        <h1>THE GIVE BACK APP</h1>
      </div>
    </header>
  );
};

export default Header;
