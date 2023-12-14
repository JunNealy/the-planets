import { planetInfo } from '../data.js';
import '../styles/styles.css';

const navButton = document.getElementById('nav-button');

const mobileNav = document.getElementById('mobile-nav-container');

navButton.addEventListener('click', () => {
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
});

function MobileNav() {
  const listItmes = planetInfo.map((planet) => (
    <li id="mobile-nav-item" key={planet.id}>
      <div
        id="mobile-nav-item-decoration"
        style={{
          backgroundColor: `${planet.keyColor}`,
        }}
      ></div>
      {planet.name.toUpperCase()}
    </li>
  ));

  return (
    <div id="mobile-nav-container">
      <ul id="mobile-nav-list">{listItmes}</ul>
    </div>
  );
}

export default MobileNav;
