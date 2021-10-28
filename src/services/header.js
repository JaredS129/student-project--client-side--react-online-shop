
const Header = ( {image} ) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={image} alt="placeholder logo"></img>
      </div>
      <div className="tagline">
        <p>Tagline goes here</p>
      </div>
    </header>
  );
};

export default Header;
