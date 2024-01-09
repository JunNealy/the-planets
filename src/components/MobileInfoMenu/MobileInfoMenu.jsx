import '../../styles/styles.css';
import './MobileInfo.css';
import { useState } from 'react';
import { planetInfo } from '../../data.js';
import { filterPlanets } from '../../Utils/filterPlanet.js';

function MobileInfoMenu({ onDetailsChange, selectedPlanet }) {
  const [activeButton, setActiveButton] = useState('overview');

  const planetColor = filterPlanets(planetInfo, selectedPlanet).keyColor;

  const getButtonStyle = (detail) => {
    if (detail === activeButton) {
      return { borderBottom: `4px solid ${planetColor}`, color: `white` };
    } else {
      return {
        borderBottom: `4px solid transparent`,
        color: `var(--light-grey)`,
      };
    }
  };

  const handleButtonClick = (detail) => {
    onDetailsChange(detail);
    setActiveButton(detail);
  };

  return (
    <div id="mobile-info-menu">
      <button
        style={getButtonStyle('overview')}
        className={`mobile-info-button`}
        id="mobileOverview"
        onClick={() => handleButtonClick('overview')}
      >
        OVERVIEW
      </button>
      <button
        style={getButtonStyle('internalStruct')}
        className={`mobile-info-button `}
        id="mobileStructure"
        onClick={() => handleButtonClick('internalStruct')}
      >
        STRUCTURE
      </button>
      <button
        style={getButtonStyle('surfaceGeo')}
        className={`mobile-info-button  `}
        id="mobileGeology"
        onClick={() => handleButtonClick('surfaceGeo')}
      >
        GEOLOGY
      </button>
    </div>
  );
}

export default MobileInfoMenu;
