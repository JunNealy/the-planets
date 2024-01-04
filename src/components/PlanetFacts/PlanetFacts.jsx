import { planetInfo } from '../../data';
import './PlanetFacts.css';

const PlanetFacts = ({ selectedPlanet }) => {
  function filterPlanets(arr, selPlanet) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(selPlanet)) {
        return arr[i];
      }
    }
  }

  const planetData = filterPlanets(planetInfo, selectedPlanet);

  return (
    <div className="planet-fact-wrapper">
      <div className="planet-fact">
        <p className="planet-fact-title">ROTATION TIME</p>
        <p className="planet-fact-content">{planetData.rotation}</p>
      </div>
      <div className="planet-fact">
        <p className="planet-fact-title">REVOLUTION TIME</p>
        <p className="planet-fact-content">{planetData.revolution}</p>
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
