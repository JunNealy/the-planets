import '../../styles/styles.css';
import './Navbar.css';
import { planetInfo } from '../../data.js';
import { useState } from 'react';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function Navbar({ onPlanetChange }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [color, setColor] = useState('');
  const styles = {
    color: color,
  };

  const handleItemClick = (planetName) => {
    setSelectedPlanet(planetName);
    onPlanetChange(planetName);
  };

  const listItems = planetInfo.map((planet) => (
    <li
      style={styles}
      onMouseEnter={() => setColor(planet.keyColor)}
      onMouseLeave={() => setColor('white')}
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
        <p className="navbar-title">THE PLANETS</p>
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
