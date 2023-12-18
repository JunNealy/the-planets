import { planetInfo } from '../data.js';
import '../styles/styles.css';
import { useEffect, useState } from 'react';

function MobileNav({ onPlanetChange }) {
  const [displayStyle, setDisplayStyle] = useState('none');
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const navButton = document.getElementById('nav-button');
    let navItem = document.querySelectorAll('.mobile-nav-item');

    const toggleMobileNav = () => {
      setDisplayStyle((prevStyle) =>
        prevStyle === 'block' ? 'none' : 'block'
      );
    };
    if (navButton || navItem) {
      navButton.addEventListener('click', toggleMobileNav);
    }
    return () => {
      if (navButton) {
        navButton.removeEventListener('click', toggleMobileNav);
      }
    };
  }, []);

  const handleItemClick = (planetName) => {
    setSelectedPlanet(planetName);
    onPlanetChange(planetName);
  };

  const listItems = planetInfo.map((planet) => (
    <li
      key={planet.id}
      className={`mobile-nav-item ${
        planet.name === selectedPlanet ? 'selected' : ''
      }`}
      id={planet.name}
      onClick={() => {
        handleItemClick(planet.name);
        // console.log(planet.name);
      }}
    >
      <div
        id="mobile-nav-item-decoration"
        style={{
          backgroundColor: `${planet.keyColor}`,
        }}
      ></div>
      <span id="mobile-nav-item-name">{planet.name.toUpperCase()}</span>
    </li>
  ));

  return (
    <div id="mobile-nav-container" style={{ display: displayStyle }}>
      <ul id="mobile-nav-list">{listItems}</ul>
    </div>
  );
}

export default MobileNav;
