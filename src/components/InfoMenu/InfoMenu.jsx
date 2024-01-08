import { planetInfo } from '../../data';
import { useEffect, useState } from 'react';
import './InfoMenu.css';

const InfoMenu = ({ onDetailsChange, selectedPlanet }) => {
  const [selectedHeading, setSelectedHeading] = useState('overview');

  const [selectedButton, setSelectedButton] = useState('overview');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    onDetailsChange(buttonName);
  };

  useEffect(() => {
    const buttonHighlight = () => {
      const getPlanetKeyColor = () => {
        const planet = filterPlanets(planetInfo, selectedPlanet);
        console.log(planet.keyColor);
        return planet.keyColor;
      };

      function filterPlanets(arr, selPlanet) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name.includes(selPlanet)) {
            return arr[i];
          }
        }
      }
      const buttons = document.querySelectorAll('.info-menu-button');
      //style reset
      buttons.forEach((button) => {
        button.style.backgroundColor = '';
        button.style.color = 'white';
        console.log('style reset');
      });
      //restyle on select
      const selectedButtonElement = document.getElementById(selectedButton);
      if (selectedButtonElement) {
        selectedButtonElement.style.backgroundColor = `${getPlanetKeyColor()}`;
      }
    };
    buttonHighlight();
  }, [selectedButton]);

  const handleHeadingClick = (headingName) => {
    setSelectedHeading(headingName);
    onDetailsChange(headingName);
  };

  return (
    <div id="info-menu">
      <button
        className="info-menu-button"
        id="overview"
        onClick={() => {
          handleButtonClick('overview');
        }}
      >
        <p className="button-count">01</p>
        <p className="button-name">OVERVIEW</p>
      </button>
      <button
        className="info-menu-button"
        id="internalStruct"
        onClick={() => {
          handleButtonClick('internalStruct');
        }}
      >
        <p className="button-count">02</p>
        <p className="button-name">INTERNAL STRUCTURE</p>
      </button>
      <button
        className="info-menu-button"
        id="surfaceGeo"
        onClick={() => {
          handleButtonClick('surfaceGeo');
        }}
      >
        <p className="button-count">03</p>
        <p className="button-name">SURFACE GEOLOGY</p>
      </button>
    </div>
  );
};

export default InfoMenu;
