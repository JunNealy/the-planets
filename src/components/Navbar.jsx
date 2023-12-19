import '../styles/styles.css';
// import burger from '../public/assets/icon-hamburger.svg';

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <p>THE PLANETS</p>
        <button id="nav-button" aria-label="Open Mobile Menu">
          <img
            id="burger-icon"
            src={`assets/icon-hamburger.svg`}
            alt="burger-icon"
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
