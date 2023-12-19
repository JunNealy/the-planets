import '../styles/styles.css';
import { useState } from 'react';
import { planetInfo } from '../data.js';

function MobileInfoMenu({ onDetailsChange }) {
  const [selectedHeading, setSelectedHeading] = useState('overview');

  const handleHeadingClick = (headingName) => {
    setSelectedHeading(headingName);
    onDetailsChange(headingName);
  };

  return (
    <div id="mobile-info-menu">
      <div className="mobile-info-button-wrapper">
        <button
          className="mobile-info-button"
          onClick={() => {
            handleHeadingClick('overview');
          }}
        >
          OVERVIEW
        </button>
        <button
          className="mobile-info-button"
          onClick={() => {
            handleHeadingClick('internalStruct');
          }}
        >
          STRUCTURE
        </button>
        <button
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
