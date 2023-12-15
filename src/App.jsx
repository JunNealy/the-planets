import Planet from './components/planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';
import { useState } from 'react';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetChange = (planet) => {
    console.log('Selected Planet in App', planet);
    setSelectedPlanet(planet);
  };

  return (
    <>
      <div>
        <Navbar />
        <MobileNav onPlanetChange={handlePlanetChange} />
        <Planet selectedPlanet={selectedPlanet} />
      </div>
    </>
  );
}

export default App;
