// import { useState } from 'react';
import { planetInfo } from '../data';

function Planet({ selectedPlanet }) {
  function filterPlanets(arr, selPlanet) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(selPlanet)) {
        return arr[i];
      }
    }
  }

  const planetData = filterPlanets(planetInfo, selectedPlanet);

  console.log(planetData.name);
  console.log(planetData.image);
  console.log(`../assets/${planetData.name}/${planetData.image}`);

  return (
    <div>
      <img
        src={`../public/assets/${planetData.name}/${planetData.image}`}
        alt={`${planetData.name}`}
      />
      <h1>{planetData.name}</h1>
      <p></p>
    </div>
  );
}

export default Planet;
