import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
      <nav className='navbar'>
        <div className="logo">Vivekanand College</div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* Navigation links */}
        <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className='nav-link' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" className='nav-link' onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Courses" className='nav-link' onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/Contact" className='nav-link' onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/Admission" className='nav-link' onClick={() => setMenuOpen(false)}>
            <button>Apply Now</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
