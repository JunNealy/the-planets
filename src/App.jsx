import Planet from './components/planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';
import MobileInfoMenu from './components/MobileInfoMenu';
import { useState } from 'react';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury');

  const handlePlanetChange = (planet) => {
    console.log('Selected Planet in App', planet);
    setSelectedPlanet(planet);
  };

  return (
    <>
      <div>
        <Navbar />
        <MobileNav onPlanetChange={handlePlanetChange} />
        <MobileInfoMenu />
        <Planet selectedPlanet={selectedPlanet} />
      </div>
    </>
  );
}

export default App;
