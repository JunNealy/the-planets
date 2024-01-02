import Planet from './components/Planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';
import MobileInfoMenu from './components/MobileInfoMenu';
import InfoMenu from './components/InfoMenu';
import { useState } from 'react';
import PlanetFacts from './components/PlanetFacts';

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
        <Planet
          selectedPlanet={selectedPlanet}
          selectedDetails={selectedDetails}
        />
        <InfoMenu
          selectedPlanet={selectedPlanet}
          onDetailsChange={handleDetailsChange}
        />
        <PlanetFacts selectedPlanet={selectedPlanet} />
      </div>
    </>
  );
}

export default App;
