// import { useState } from 'react';
import { planetInfo } from '../data';

function Planet({ selectedPlanet, selectedDetails }) {
  function filterPlanets(arr, selPlanet) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(selPlanet)) {
        return arr[i];
      }
    }
  }
  const planetData = filterPlanets(planetInfo, selectedPlanet);
  const details = selectedDetails;

  const activeDetails = planetData[details];

  console.log(planetData);
  console.log(planetData.selectedDetails);
  // console.log(planetData.name);
  // console.log(planetData.image);
  // console.log(`../assets/${planetData.name}/${planetData.image}`);

  // const planetImage = planetData.image;
  //  image: 'planet-saturn.svg',
  //   internalImage: 'planet-saturn-internal.svg',
  //   geologyImage:

  return (
    <div id="planet-container">
      <img
        className="planet-image"
        src={`/assets/${planetData.name}/${planetData.image}`}
      />
      <div className="planet-text">
        <h2 className="planet-name">{planetData.name.toUpperCase()}</h2>
        <p className="planet-details">{activeDetails}</p>
        <p>
          Source:{' '}
          <a href="">
            Wikipedia <img src="/assets/icon-source.svg" alt="" />
          </a>
        </p>
      </div>
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
    </div>
  );
}

export default Planet;
