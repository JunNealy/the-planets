import { planetInfo } from '../../data';
import './PlanetImage.css';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function PlanetImage({ selectedPlanet, selectedDetails }) {
  const planetData = filterPlanets(planetInfo, selectedPlanet);
  const basePath = import.meta.env.BASE_URL || '/';
  function planetImage(d) {
    if (d === 'overview' || d === 'surfaceGeo') {
      console.log(basePath);
      return `${basePath}assets/${planetData.image}`;
    } else {
      console.log(basePath);
      return `${basePath}assets/${planetData.internalImage}`;
    }
  }
  function planetGeoImage(d) {
    if (d === 'surfaceGeo') {
      return `${basePath}assets/${planetData.geologyImage}`;
    } else {
      return ``;
    }
  }

  return (
    <div className="planet-image-wrapper">
      <img
        className="planet-image"
        src={planetImage(selectedDetails)}
        alt={`${selectedPlanet}`}
      />
      <img
        className="planet-image-geology"
        src={planetGeoImage(selectedDetails)}
        alt={`${selectedPlanet} geology`}
      />
    </div>
  );
}

export default PlanetImage;
