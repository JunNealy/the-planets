import '../styles/styles.css';
import { planetInfo } from '../data.js';

function Navbar(selectedPlanet) {
  const listItems = planetInfo.map((planet) => (
    <li
      key={planet.id}
      className={`planet-list-item ${
        planet.name === selectedPlanet ? 'selected' : ''
      }`}
      id={planet.name}
      onClick={() => {
        handleItemClick(planet.name);
      }}
    >
      <p>{planet.name.toUpperCase()}</p>
    </li>
  ));

  return (
    <header>
      <nav id="navbar">
        <p>THE PLANETS</p>
        <ul className="planet-list">{listItems}</ul>
        <button id="nav-button" aria-label="Open Mobile Menu">
          <img
            id="burger-icon"
            src={`assets/icon-hamburger.svg`}
            alt="burger-icon"
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
