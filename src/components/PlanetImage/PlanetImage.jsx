import { planetInfo } from '../../data';
import './PlanetImage.css';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function PlanetImage({ selectedPlanet, selectedDetails }) {
  const planetData = filterPlanets(planetInfo, selectedPlanet);
  let details = selectedDetails;

  function planetImage(d) {
    if (d === 'overview' || d === 'surfaceGeo') {
      return `/assets/${planetData.name}/${planetData.image}`;
    } else {
      return `/assets/${planetData.name}/${planetData.internalImage}`;
    }
  }

  return <img className="planet-image" src={planetImage(details)} />;
}

export default PlanetImage;
