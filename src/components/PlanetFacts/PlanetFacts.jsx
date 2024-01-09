import { planetInfo } from '../../data';
import './PlanetFacts.css';
import { filterPlanets } from '../../Utils/filterPlanet.js';

const PlanetFacts = ({ selectedPlanet }) => {
  const planetData = filterPlanets(planetInfo, selectedPlanet);

  return (
    <div className="planet-fact-wrapper">
      <div className="planet-fact">
        <p className="planet-fact-title">ROTATION TIME</p>
        <p className="planet-fact-content">
          {planetData.rotation.toUpperCase()}
        </p>
      </div>
      <div className="planet-fact">
        <p className="planet-fact-title">REVOLUTION TIME</p>
        <p className="planet-fact-content">
          {planetData.revolution.toUpperCase()}
        </p>
      </div>
      <div className="planet-fact">
        <p className="planet-fact-title">RADIUS</p>
        <p className="planet-fact-content">{planetData.radius}</p>
      </div>
      <div className="planet-fact">
        <p className="planet-fact-title">AVERAGE TEMP.</p>
        <p className="planet-fact-content">{planetData.avgTemp}</p>
      </div>
    </div>
  );
};

export default PlanetFacts;
