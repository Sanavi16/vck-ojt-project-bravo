import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
  return (
    <div className='header'>
    
      <div className="logo">Vivekanand College</div>
      <nav className='navbar'>
        <Link to="/Home" className='nav-link'>Home</Link>
        <Link to="/About" className='nav-link'>About</Link>
         
        <Link to="/Courses"className='nav-link'>Courses</Link>
        <Link to="/Contact"className='nav-link'>Contact</Link>
         <Link to="/Admission"className='nav-link'>Admission <button>Apply Now</button></Link>
      </nav>
    
    </div>
  );
};

export default Header;