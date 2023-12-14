import { planetInfo } from '../data.js';

function MobileNav() {
  const listItmes = planetInfo.map((planet) => (
    <li key={planet.id}>
      <div
        style={{
          borderRadius: '50000px',
          height: '10px',
          width: '10px',
          backgroundColor: `${planet.keyColor}`,
        }}
      ></div>
      {planet.name}
    </li>
  ));

  return (
    <div>
      <ul>{listItmes}</ul>
    </div>
  );
}

export default MobileNav;
