import { planetInfo } from '../../data';
import { useState } from 'react';
import { filterPlanets } from '../../Utils/filterPlanet';
import './InfoMenu.css';

const InfoMenu = ({ onDetailsChange, selectedPlanet }) => {
  const [activeButton, setActiveButton] = useState('overview');

  const planetColor = filterPlanets(planetInfo, selectedPlanet).keyColor;

  const getButtonStyle = (detail) => {
    if (detail === activeButton) {
      return { backgroundColor: `${planetColor}`, color: `white` };
    } else {
      return {};
    }
  };

  const handleButtonClick = (detail) => {
    onDetailsChange(detail);
    setActiveButton(detail);
  };

  return (
    <div id="info-menu">
      <button
        className="info-menu-button"
        style={getButtonStyle('overview')}
        id="Overview"
        onClick={() => handleButtonClick('overview')}
      >
        <p className="button-count">01</p>
        <p className="button-name">Overview</p>
      </button>
      <button
        className="info-menu-button"
        style={getButtonStyle('internalStruct')}
        id="Overview"
        onClick={() => handleButtonClick('internalStruct')}
      >
        <p className="button-count">02</p>
        <p className="button-name">Internal Structure</p>
      </button>
      <button
        className="info-menu-button"
        style={getButtonStyle('surfaceGeo')}
        id="Overview"
        onClick={() => handleButtonClick('surfaceGeo')}
      >
        <p className="button-count">03</p>
        <p className="button-name">Surface Geology</p>
      </button>
    </div>
  );
};

export default InfoMenu;
