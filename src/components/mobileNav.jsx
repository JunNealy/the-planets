import { planetInfo } from '../data.js';
import '../styles/styles.css';
import { useEffect, useState } from 'react';

function MobileNav() {
  const [displayStyle, setDisplayStyle] = useState('none');

  useEffect(() => {
    const navButton = document.getElementById('nav-button');

    const toggleMobileNav = () => {
      setDisplayStyle((prevStyle) =>
        prevStyle === 'block' ? 'none' : 'block'
      );
    };
    if (navButton) {
      navButton.addEventListener('click', toggleMobileNav);
    }

    return () => {
      if (navButton) {
        navButton.removeEventListener('click', toggleMobileNav);
      }
    };
  }, []);

  const listItems = planetInfo.map((planet) => (
    <li key={planet.id} id="mobile-nav-item">
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
