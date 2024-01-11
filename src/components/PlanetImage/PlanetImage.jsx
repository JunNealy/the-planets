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
  function planetGeoImage(d) {
    if (d === 'surfaceGeo') {
      return `/assets/${planetData.name}/${planetData.geologyImage}`;
    } else {
      return ``;
    }
  }

  return (
    <div className="planet-image-wrapper">
      <img
        className="planet-image"
        src={planetImage(details)}
        alt={`${selectedPlanet}`}
      />
      <img
        className="planet-image-geology"
        src={planetGeoImage(details)}
        alt={`${selectedPlanet} geology`}
      />
    </div>
  );
}

export default PlanetImage;
