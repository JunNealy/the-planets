import Planet from './components/planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';
import MobileInfoMenu from './components/MobileInfoMenu';
import { useState } from 'react';

function App() {
  //Planet select and set
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury');

  const handlePlanetChange = (planet) => {
    console.log('Selected Planet in App', planet);
    setSelectedPlanet(planet);
  };

  //Details select and set
  const [selectedDetails, setSelectedDetails] = useState('overview');

  const handleDetailsChange = (details) => {
    console.log('Selected Details Section in App', details);
    setSelectedDetails(details);
  };

  return (
    <>
      <div>
        <Navbar />
        <MobileNav onPlanetChange={handlePlanetChange} />
        <MobileInfoMenu onDetailsChange={handleDetailsChange} />
        <Planet
          selectedPlanet={selectedPlanet}
          selectedDetails={selectedDetails}
        />
      </div>
    </>
  );
}

export default App;
