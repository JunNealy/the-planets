import { planetInfo } from '../../data';
import './Planet.css';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function Planet({ selectedPlanet, selectedDetails }) {
  const planetData = filterPlanets(planetInfo, selectedPlanet);
  let details = selectedDetails;
  const activeDetails = planetData[details];

  // function planetImage(d) {
  //   if (d === 'overview' || d === 'surfaceGeo') {
  //     return `/assets/${planetData.name}/${planetData.image}`;
  //   } else {
  //     return `/assets/${planetData.name}/${planetData.internalImage}`;
  //   }
  // }

  return (
    <div id="planet-container">
      <h2 className="planet-name">{planetData.name.toUpperCase()}</h2>
      <p className="planet-details">{activeDetails}</p>
      <p className="planet-citation">
        Source:{' '}
        <a className="planet-citation-link" href="">
          Wikipedia{''}
          <img
            className="planet-citation-icon"
            src="/assets/icon-source.svg"
            alt=""
          />
        </a>
      </p>
    </div>
  );
}

export default Planet;
