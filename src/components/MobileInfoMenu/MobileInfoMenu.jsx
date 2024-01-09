import '../../styles/styles.css';
import './MobileInfo.css';
import { useState } from 'react';
import { planetInfo } from '../../data.js';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function MobileInfoMenu({ onDetailsChange, selectedPlanet }) {
  const [activeButton, setActiveButton] = useState('overview');

  const planetColor = filterPlanets(planetInfo, selectedPlanet).keyColor;

  const styleButton = (detail) =>
    detail === activeButton ? planetColor : 'transparent';

  const handleButtonClick = (detail) => {
    onDetailsChange(detail);
    setActiveButton(detail);
  };

  return (
    <div id="mobile-info-menu">
      <button
        style={{ borderBottom: `4px solid ${styleButton('overview')}` }}
        className={`mobile-info-button`}
        id="mobileOverview"
        onClick={() => handleButtonClick('overview')}
      >
        Overview
      </button>
      <button
        style={{ borderBottom: `4px solid ${styleButton('internalStruct')}` }}
        className={`mobile-info-button `}
        id="mobileStructure"
        onClick={() => handleButtonClick('internalStruct')}
      >
        Structure
      </button>
      <button
        style={{ borderBottom: `4px solid ${styleButton('surfaceGeo')}` }}
        className={`mobile-info-button  `}
        id="mobileGeology"
        onClick={() => handleButtonClick('surfaceGeo')}
      >
        Geology
      </button>
    </div>
  );
}

export default MobileInfoMenu;
