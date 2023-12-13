import Planet from './components/planet';
import Navbar from './components/navBar';
import MobileNav from './components/mobileNav';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <MobileNav />
        <Planet />
      </div>
    </>
  );
}

export default App;
