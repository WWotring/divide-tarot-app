import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './NavMenu.css';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="hamburgerButton" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <AiOutlineMenu/>
      </button>
      {isOpen && <div className="navOverlay" onClick={closeMenu} />}
      <div className={`navPanel ${isOpen ? "navPanel-open" : ""}`}>
        <button className="navCloseButton" onClick={closeMenu} aria-label="Close menu">
          <AiOutlineClose/>
        </button>
        <nav className="navLinks">
          <Link to="/" onClick={closeMenu}>Gallery</Link>
          <Link to="/reading" onClick={closeMenu}>3 Card Reading</Link>
        </nav>
      </div>
    </>
  );
}

export default NavMenu;
