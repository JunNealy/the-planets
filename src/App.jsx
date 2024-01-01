import Planet from './components/Planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';
import MobileInfoMenu from './components/MobileInfoMenu';
import { useState } from 'react';

function App() {
  //Planet select and set
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury');

  const handlePlanetChange = (planet) => {
    setSelectedPlanet(planet);
  };

  //Details select and set
  const [selectedDetails, setSelectedDetails] = useState('overview');

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
      </div>
    </>
  );
}

export default App;
