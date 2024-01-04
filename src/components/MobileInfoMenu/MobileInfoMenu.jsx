import '../../styles/styles.css';
import { useEffect, useState } from 'react';
import { planetInfo } from '../../data.js';

function MobileInfoMenu({ onDetailsChange, selectedPlanet }) {
  const [selectedHeading, setSelectedHeading] = useState('overview');

  console.log(selectedPlanet);

  useEffect(() => {
    headingHighlight();
  }, [selectedHeading]);

  const headingHighlight = () => {
    const headings = document.querySelectorAll('.mobile-info-button');

    headings.forEach((heading) => {
      heading.style.borderBottom = '3px solid transparent';
      console.log('style reset');
    });

    const selectedHeadingElement = document.getElementById(selectedHeading);
    if (selectedHeadingElement) {
      selectedHeadingElement.style.borderBottom = `3px solid ${getPlanetKeyColor()}`;
    }
  };

  const handleHeadingClick = (headingName) => {
    setSelectedHeading(headingName);
    onDetailsChange(headingName);
  };

  const getPlanetKeyColor = () => {
    const planet = filterPlanets(planetInfo, selectedPlanet);
    return planet.keyColor;
  };

  function filterPlanets(arr, selPlanet) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.includes(selPlanet)) {
        return arr[i];
      }
    }
  }

  return (
    <div id="mobile-info-menu">
      <div className="mobile-info-button-wrapper">
        <button
          id="overview"
          className="mobile-info-button"
          onClick={() => {
            handleHeadingClick('overview');
          }}
        >
          OVERVIEW
        </button>
        <button
          id="internalStruct"
          className="mobile-info-button"
          onClick={() => {
            handleHeadingClick('internalStruct');
          }}
        >
          STRUCTURE
        </button>
        <button
          id="surfaceGeo"
          className="mobile-info-button"
          onClick={() => {
            handleHeadingClick('surfaceGeo');
          }}
        >
          SURFACE
        </button>
      </div>
    </div>
  );
}

export default MobileInfoMenu;
