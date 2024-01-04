import { planetInfo } from '../../data';

function PlanetImage({ selectedPlanet, selectedDetails }) {
  function filterPlanets(arr, selPlanet) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(selPlanet)) {
        return arr[i];
      }
    }
  }

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
