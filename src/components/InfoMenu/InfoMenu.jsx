import { planetInfo } from '../../data';
import { useEffect, useState } from 'react';
import './InfoMenu.css';

const InfoMenu = ({ onDetailsChange, selectedPlanet }) => {
  const [selectedHeading, setSelectedHeading] = useState('overview');

  console.log(selectedPlanet);

  useEffect(() => {
    headingHighlight();
  }, [selectedHeading]);

  const headingHighlight = () => {
    const headings = document.querySelectorAll('.mobile-info-button');
    //style reset
    headings.forEach((heading) => {
      heading.style.borderBottom = '3px solid transparent';
      heading.style.color = '#838391';
      console.log('style reset');
    });
    //restyle on select
    const selectedHeadingElement = document.getElementById(selectedHeading);
    if (selectedHeadingElement) {
      selectedHeadingElement.style.borderBottom = `3px solid ${getPlanetKeyColor()}`;
      selectedHeadingElement.style.color = 'white';
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
    <div id="info-menu">
      <button className="info-menu-button">
        <p className="button-count">01</p>
        <p className="button-name">OVERVIEW</p>
      </button>
      <button className="info-menu-button">
        <p className="button-count">02</p>
        <p className="button-name">INTERNAL STRUCTURE</p>
      </button>
      <button className="info-menu-button">
        <p className="button-count">03</p>
        <p className="button-name">SURFACE GEOLOGY</p>
      </button>
    </div>
  );
};

export default InfoMenu;
