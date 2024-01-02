import { planetInfo } from '../data';
import { useEffect, useState } from 'react';

const InfoMenu = ({ onDetailsChange, selectedPlanet }) => {
  const [selectedInfo, setSelectedInfo] = useState('overview');

  useEffect(() => {
    headingHighlight();
  }, [selectedInfo]);

  const headingHighlight = () => {
    const headings = document.querySelectorAll('.mobile-info-button');

    headings.forEach((heading) => {
      heading.style.borderBottom = '3px solid transparent';
      console.log('style reset');
    });

    const selectedHeadingElement = document.getElementById(selectedInfo);
    if (selectedHeadingElement) {
      selectedHeadingElement.style.borderBottom = `3px solid ${getPlanetKeyColor()}`;
    }
  };

  const handleInfoClick = (infoName) => {
    setSelectedInfo(infoName);
    onDetailsChange(infoName);
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
    <div id="info-menu">
      <div className="info-button-wrapper">
        <button
          id="overview"
          className="info-button"
          onClick={() => {
            handleInfoClick('overview');
          }}
        >
          OVERVIEW
        </button>
        <button
          id="internalStruct"
          className="info-button"
          onClick={() => {
            handleInfoClick('internalStruct');
          }}
        >
          STRUCTURE
        </button>
        <button
          id="surfaceGeo"
          className="info-button"
          onClick={() => {
            handleInfoClick('surfaceGeo');
          }}
        >
          SURFACE
        </button>
      </div>
    </div>
  );
};

export default InfoMenu;
