import Planet from './components/Planet/Planet';
import Navbar from './components/Navbar/Navbar';
import MobileNav from './components/MobileNav/MobileNav';
import MobileInfoMenu from './components/MobileInfoMenu/MobileInfoMenu';
import InfoMenu from './components/InfoMenu/InfoMenu';
import { useState } from 'react';
import PlanetFacts from './components/PlanetFacts/PlanetFacts';
import PlanetImage from './components/PlanetImage/PlanetImage';
import './styles/styles.css';

function App() {
  //Planet State
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury');
  //Planet State Change
  const handlePlanetChange = (planet) => {
    setSelectedPlanet(planet);
  };

  //Details State
  const [selectedDetails, setSelectedDetails] = useState('overview');
  //Details State Change
  const handleDetailsChange = (details) => {
    setSelectedDetails(details);
  };

  return (
    <>
      <div>
        <Navbar
          selectedPlanet={selectedPlanet}
          onPlanetChange={handlePlanetChange}
        />
        <MobileNav onPlanetChange={handlePlanetChange} />
        <MobileInfoMenu
          onDetailsChange={handleDetailsChange}
          selectedPlanet={selectedPlanet}
        />
        <div className="content-container">
          <PlanetImage
            selectedPlanet={selectedPlanet}
            selectedDetails={selectedDetails}
          />
          <div className="planet-info-wrapper">
            <Planet
              selectedPlanet={selectedPlanet}
              selectedDetails={selectedDetails}
            />
            {/* <InfoMenu
              selectedPlanet={selectedPlanet}
              onDetailsChange={handleDetailsChange}
            /> */}
          </div>
          <PlanetFacts selectedPlanet={selectedPlanet} />
        </div>
      </div>
    </>
  );
}

export default App;
